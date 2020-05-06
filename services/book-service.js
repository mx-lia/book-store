const { Book, BookGenre } = require("../sequelize");

module.exports = {
  getAll,
  getByIsbn,
  create,
  update,
  remove,
};

async function getAll(limit, page, genre, orderBy) {
  switch (orderBy) {
    case "pubdate_old_new":
      orderBy = ["publication_date", "DESC"];
      break;
    case "pubdate_new_old":
      orderBy = ["publication_date", "ASC"];
      break;
    case "price_high_low":
      orderBy = ["price", "DESC"];
      break;
    case "price_low_high":
      orderBy = ["price", "ASC"];
      break;
  }
  const data = await Book.findAndCountAll({
    include: [
      genre ? { association: "genres", where: { name: genre } } : "genres",
    ],
  });
  let offset = 0;
  let pages = Math.ceil(data.count / limit);
  offset = limit * (page - 1);
  const books = await Book.findAll({
    limit: limit,
    offset: offset,
    include: [
      "author",
      "publisher",
      "cover",
      genre ? { association: "genres", where: { name: genre } } : "genres",
    ],
    order: [orderBy ? orderBy : ["title", "ASC"]],
  });
  return { books: books, count: data.count, pages: pages };
}

async function getByIsbn(isbn) {
  return await Book.findByPk(isbn, {
    include: [{ all: true }],
  });
}

async function create(book) {
  const newBook = new Book(book);
  await newBook.save();
  const newBookGenre = new BookGenre({ book: book.isbn, genre: book.genre });
  await newBookGenre.save();
}

async function update(isbn, bookParams) {
  const book = await Book.findByPk(isbn);
  if (!book) throw "Book not found";
  Object.assign(book, bookParams);
  await book.save();
}

async function remove(isbn) {
  await Book.destroy({ where: { id: isbn } });
}
