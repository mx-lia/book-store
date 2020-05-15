import serverCall from "./serverCall";

export const getAuthors = async () => {
  try {
    const res = await serverCall("/authors");
    return res;
  } catch (err) {}
};

export const createAuthor = async (value) => {
  try {
    const values = value.split(" ", 2);
    const res = await serverCall("/author/new", {
      body: { firstName: values[0], lastName: values[1] },
    });
    return res;
  } catch (err) {}
};
