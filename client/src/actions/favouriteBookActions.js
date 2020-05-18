import serverCall from "./serverCall";

export const getFavourites = async (setError) => {
  try {
    const res = await serverCall(`/favourites`);
    return res;
  } catch (err) {
    setError(err);
  }
};

export const createFavourite = async (isbn, setError) => {
  try {
    const res = await serverCall(`/favourite/new`, { body: { isbn: isbn } });
    return res;
  } catch (err) {
    setError(err);
  }
};

export const deleteFavourite = async (id, setError) => {
  try {
    const res = await serverCall(`/favourite/${id}`, { method: "DELETE" });
    return res;
  } catch (err) {
    setError(err);
  }
};
