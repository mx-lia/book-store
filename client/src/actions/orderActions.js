import serverCall from "./serverCall";

export const getOrders = async () => {
  try {
    const res = await serverCall("/orders");
    return res;
  } catch (err) {}
};

export const createOrder = async (customer, books) => {
  try {
    const res = await serverCall("/order/new", {
      body: {
        customer,
        books: books.map((element) => {
          return { isbn: element.book.isbn, amount: element.quantity };
        }),
      },
    });
    return res;
  } catch (err) {}
};
