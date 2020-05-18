import serverCall from "./serverCall";

export const getGenres = async (setError) => {
  try {
    const res = await serverCall("/genres");
    return res;
  } catch (err) {
    setError(err);
  }
};

export const createGenre = async (name, setError) => {
  try {
    const res = await serverCall("/genre/new", { body: { name: name } });
    return res;
  } catch (err) {
    setError(err);
  }
};
