import serverCall from "./serverCall";

export const getGenres = async () => {
  try {
    const res = await serverCall("/genres");
    return res;
  } catch (err) {}
};

export const createGenre = async (name) => {
  try {
    const res = await serverCall("/genre/new", { body: { name: name } });
    return res;
  } catch (err) {}
};
