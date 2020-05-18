import serverCall from "./serverCall";

export const getReviewsByIsbn = async (isbn, setError) => {
  try {
    const res = await serverCall(`/reviews/${isbn}`);
    return res;
  } catch (err) {
    setError(err);
  }
};

export const createReview = async (review, setError) => {
  try {
    const res = await serverCall(`/review/new`, { body: { review } });
    return res;
  } catch (err) {
    setError(err);
  }
};

export const createReviewWebSocket = (ws, review, setError) => {
  try {
    ws.send(JSON.stringify(review));
  } catch (err) {
    setError(err);
  }
};