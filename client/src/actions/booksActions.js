import serverCall from "./serverCall";

function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
}

export const getBooks = async (params) => {
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
  } catch (err) {}
};

export const getBook = async (isbn) => {
  try {
    const res = await serverCall(`/book/${isbn}`);
    return {
      ...res,
      src: res.cover
        ? "data:image/jpg;base64," + arrayBufferToBase64(res.cover.image.data)
        : null,
    };
  } catch (err) {}
};
