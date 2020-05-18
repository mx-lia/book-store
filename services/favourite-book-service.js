const { FavouriteBook } = require("../sequelize");

module.exports = {
  getByCustomerId,
  create,
  remove,
};

async function getByCustomerId(customerId) {
  return await FavouriteBook.findAll({
    where: { customer: customerId },
    include: { all: true },
  });
}

async function create(bookIsbn, customerId) {
  const favouriteBook = new FavouriteBook({
    book: bookIsbn,
    customer: customerId,
  });
  return await favouriteBook.save();
}

async function remove(id) {
  await FavouriteBook.destroy({ where: { id } });
  return id;
}
