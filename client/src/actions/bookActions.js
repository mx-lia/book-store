import serverCall from "./serverCall";

function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
}

function createFormData(values) {
  let formData = new FormData();
  for (let key in values) {
    switch (key) {
      case "author":
        formData.append("author_id", values[key].value);
        break;
      case "publisher":
        formData.append("publisher_id", values[key].value);
        break;
      case "genres": {
        for (let i in values[key]) {
          formData.append(key, values[key][i].value);
        }
        break;
      }
      case "cover":
        break;
      default:
        formData.append(key, values[key]);
    }
  }
  if (values.cover) formData.append("cover", values.cover);
  return formData;
}

export const getBooks = async (params, setError) => {
  try {
    let url = "/books?";
    for (let key in params) {
      if (params[key]) url += `${key}=${params[key]}&`;
    }
    const res = await serverCall(url);
    const books = res.books.map((element) => ({
      ...element,
      src: element.cover
        ? "data:image/jpg;base64," +
          arrayBufferToBase64(element.cover.image.data)
        : null,
    }));
    let pages = [];
    for (let i = 1; i <= res.pages; i++) {
      pages.push(i);
    }
    return { ...res, pages, books };
  } catch (err) {
    setError(err);
  }
};

export const getBook = async (isbn, setError) => {
  try {
    const res = await serverCall(`/book/${isbn}`);
    return {
      ...res,
      src: res.cover
        ? "data:image/jpg;base64," + arrayBufferToBase64(res.cover.image.data)
        : null,
    };
  } catch (err) {
    setError(err);
  }
};

export const createBook = async (values, setError) => {
  try {
    const res = await fetch("/book/new", {
      method: "POST",
      body: createFormData(values),
    });
    return res;
  } catch (err) {
    setError(err);
  }
};

export const updateBook = async (values, setError) => {
  try {
    const res = await fetch(`/book/${values.isbn}`, {
      method: "PUT",
      body: createFormData(values),
    });
    return res;
  } catch (err) {
    setError(err);
  }
};

export const deleteBook = async (isbn, setError) => {
  try {
    const res = await serverCall(`/book/${isbn}`, { method: "DELETE" });
    return res;
  } catch (err) {
    setError(err);
  }
};
