import serverCall from "./serverCall";

export const getGenres = async () => {
  try {
    const res = await serverCall("/genres");
    return res;
  } catch (err) {}
};
