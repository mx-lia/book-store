import serverCall from "./serverCall";

export const getOrders = async (setError) => {
  try {
    const res = await serverCall("/orders");
    return res;
  } catch (err) {
    setError(err);
  }
};

export const createOrder = async (customer, books, setError) => {
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
  } catch (err) {
    setError(err);
  }
};
