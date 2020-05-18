const { Review } = require("../sequelize");

module.exports = {
  getByBookIsbn,
  create,
};

async function getByBookIsbn(isbn) {
  return await Review.findAll({
    where: { book_isbn: isbn },
    include: { all: true },
  });
}

async function create({ customerId, isbn, text }) {
  const newReview = new Review({
    text: text,
    book_isbn: isbn,
    customer_id: customerId,
  });
  return await newReview.save();
}
