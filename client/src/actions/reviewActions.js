import serverCall from "./serverCall";

export const getReviewsByIsbn = async (isbn) => {
  try {
    const res = await serverCall(`/reviews/${isbn}`);
    return res;
  } catch (err) {}
};

export const createReview = async (review) => {
  try {
    const res = await serverCall(`/review/new`, { body: { review } });
    return res;
  } catch (err) {}
};

export const createReviewWebSocket = (ws, review) => {
  try {
    ws.send(JSON.stringify(review));
  } catch (err) {}
};

export const deleteReview = async (id) => {
  try {
    const res = await serverCall(`/review/${id}`, { method: "DELETE" });
    return res;
  } catch (err) {}
};
