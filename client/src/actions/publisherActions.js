import serverCall from "./serverCall";

export const getPublishers = async () => {
  try {
    const res = await serverCall("/publishers");
    return res;
  } catch (err) {}
};

export const createPublisher = async (name) => {
  try {
    const res = await serverCall("/publisher/new", { body: { name: name } });
    return res;
  } catch (err) {}
};
