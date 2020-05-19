const { FavouriteBook } = require("../sequelize");

module.exports = {
  getByCustomerId,
  create,
  remove,
};

async function getByCustomerId(customerId) {
  return await FavouriteBook.findAll({
    where: { customer_id: customerId },
    include: { all: true },
  });
}

async function create(bookIsbn, customerId) {
  const favouriteBook = new FavouriteBook({
    book_isbn: bookIsbn,
    customer_id: customerId,
  });
  return await favouriteBook.save();
}

async function remove(id) {
  await FavouriteBook.destroy({ where: { id } });
  return id;
}
