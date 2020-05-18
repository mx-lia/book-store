import serverCall from "./serverCall";

export const getPublishers = async (setError) => {
  try {
    const res = await serverCall("/publishers");
    return res;
  } catch (err) {
    setError(err);
  }
};

export const createPublisher = async (name, setError) => {
  try {
    const res = await serverCall("/publisher/new", { body: { name: name } });
    return res;
  } catch (err) {
    setError(err);
  }
};
