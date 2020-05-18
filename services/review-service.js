const { Review } = require("../sequelize");

module.exports = {
  getByBookIsbn,
  create,
  remove,
};

async function getByBookIsbn(isbn) {
  return await Review.findAll({
    where: { book_isbn: isbn },
    include: { all: true },
  });
}

async function create({customerId, isbn, text}) {
  const newReview = new Review({
    text: text,
    book_isbn: isbn,
    customer_id: customerId,
    date: new Date(),
  });
  return await newReview.save();
}

async function remove(id) {
  return await Review.destroy({ where: { id } });
}
