import serverCall from "./serverCall";

export const getFavourites = async () => {
  try {
    const res = await serverCall(`/favourites`);
    return res;
  } catch (err) {}
};

export const createFavourite = async (isbn) => {
  try {
    const res = await serverCall(`/favourite/new`, { body: { isbn: isbn } });
    return res;
  } catch (err) {}
};

export const deleteFavourite = async (id) => {
  try {
    const res = await serverCall(`/favourite/${id}`, { method: "DELETE" });
    return res;
  } catch (err) {}
};
