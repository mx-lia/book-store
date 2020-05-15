const { Book, BookGenre, BookCover } = require("../sequelize");

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
  let pages = Math.ceil(data.rows.length / limit);
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
  return { books: books, count: data.rows.length, pages: pages };
}

async function getByIsbn(isbn) {
  return await Book.findByPk(isbn, {
    include: [{ all: true }],
  });
}

async function create(book, files) {
  let newBook = new Book(book);
  newBook = await newBook.save();
  Array.isArray(book.genres)
    ? book.genres.map(
        async (id) => await BookGenre.create({ book: newBook.isbn, genre: id })
      )
    : await BookGenre.create({ book: newBook.isbn, genre: book.genres });
  if (files) {
    await BookCover.create({
      contentType: files.cover.mimetype,
      image: files.cover.data,
      book_isbn: newBook.isbn,
    });
  }
}

async function update(isbn, updatedBook, files) {
  const book = await Book.findByPk(isbn);
  Object.assign(book, updatedBook);
  await BookGenre.destroy({ where: { book: book.isbn } });
  Array.isArray(updatedBook.genres)
    ? updatedBook.genres.map((genre) =>
        BookGenre.create({ genre: genre, book: book.isbn })
      )
    : BookGenre.create({ genre: updatedBook.genres, book: book.isbn });
  await book.save();
  if (files) {
    const cover = await BookCover.findOne({ where: { book_isbn: book.isbn } });
    if (cover) {
      Object.assign(cover, {
        contentType: files.cover.mimetype,
        image: files.cover.data,
      });
      await cover.save();
    } else {
      await BookCover.create({
        contentType: files.cover.mimetype,
        image: files.cover.data,
        book_isbn: book.isbn,
      });
    }
  }
}

async function remove(isbn) {
  await Book.destroy({ where: { isbn: isbn } });
}
