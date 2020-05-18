import serverCall from "./serverCall";

export const getAuthors = async (setError) => {
  try {
    const res = await serverCall("/authors");
    return res;
  } catch (err) {
    setError(err);
  }
};

export const createAuthor = async (value, setError) => {
  try {
    const values = value.split(" ", 2);
    const res = await serverCall("/author/new", {
      body: { firstName: values[0], lastName: values[1] },
    });
    return res;
  } catch (err) {
    setError(err);
  }
};
