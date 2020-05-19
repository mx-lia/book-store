const { Book, BookGenre, BookCover } = require("../sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

module.exports = {
  getAll,
  getByIsbn,
  create,
  update,
  remove,
};

async function getAll(
  limit,
  page,
  genre,
  orderBy,
  keyword,
  price,
  availabitity
) {
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
    default:
      orderBy = undefined;
      break;
  }

  switch (price) {
    case "low":
      price = { [Op.lt]: 15 };
      break;
    case "med":
      price = { [Op.in]: [15, 30] };
      break;
    case "high":
      price = { [Op.gt]: 30 };
      break;
    default:
      price = undefined;
      break;
  }

  switch (availabitity) {
    case "in_stock":
      availabitity = { [Op.gt]: 0 };
      break;
    case "out_of_stock":
      availabitity = 0;
      break;
    default:
      availabitity = undefined;
      break;
  }

  if (keyword) keyword = keyword.replace(/\s+/g, "").toLowerCase();

  const options = {
    [Op.and]: [
      keyword
        ? sequelize.where(
            sequelize.fn(
              "replace",
              sequelize.fn("lower", sequelize.col("books.title")),
              " ",
              ""
            ),
            {
              [Op.or]: {
                [Op.substring]: keyword,
                [Op.startsWith]: keyword,
                [Op.endsWith]: keyword,
                [Op.eq]: keyword,
              },
            }
          )
        : {},
      price ? { "$books.price$": price } : {},
      availabitity != undefined
        ? {
            "$books.available_quantity$": availabitity,
          }
        : {},
    ],
  };

  const authorOptions = {
    [Op.or]: [
      keyword
        ? sequelize.where(
            sequelize.fn(
              "replace",
              sequelize.fn("lower", sequelize.col("first_name")),
              " ",
              ""
            ),
            {
              [Op.or]: {
                [Op.substring]: keyword,
                [Op.startsWith]: keyword,
                [Op.endsWith]: keyword,
                [Op.eq]: keyword,
              },
            }
          )
        : {},
      keyword
        ? sequelize.where(
            sequelize.fn(
              "replace",
              sequelize.fn("lower", sequelize.col("last_name")),
              " ",
              ""
            ),
            {
              [Op.or]: {
                [Op.substring]: keyword,
                [Op.startsWith]: keyword,
                [Op.endsWith]: keyword,
                [Op.eq]: keyword,
              },
            }
          )
        : {},
      keyword
        ? sequelize.where(
            sequelize.fn(
              "concat",
              sequelize.fn(
                "replace",
                sequelize.fn("lower", sequelize.col("first_name")),
                " ",
                ""
              ),
              sequelize.fn(
                "replace",
                sequelize.fn("lower", sequelize.col("last_name")),
                " ",
                ""
              )
            ),
            {
              [Op.or]: {
                [Op.substring]: keyword,
                [Op.startsWith]: keyword,
                [Op.endsWith]: keyword,
                [Op.eq]: keyword,
              },
            }
          )
        : {},
      keyword
        ? sequelize.where(
            sequelize.fn(
              "concat",
              sequelize.fn(
                "replace",
                sequelize.fn("lower", sequelize.col("last_name")),
                " ",
                ""
              ),
              sequelize.fn(
                "replace",
                sequelize.fn("lower", sequelize.col("first_name")),
                " ",
                ""
              )
            ),
            {
              [Op.or]: {
                [Op.substring]: keyword,
                [Op.startsWith]: keyword,
                [Op.endsWith]: keyword,
                [Op.eq]: keyword,
              },
            }
          )
        : {},
      options,
    ],
  };

  const data = await Book.findAndCountAll({
    include: [
      keyword || price || availabitity != undefined
        ? { association: "author", where: authorOptions }
        : "author",
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
      keyword || price || availabitity != undefined
        ? { association: "author", where: authorOptions }
        : "author",
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
        async (id) => await BookGenre.create({ book_isbn: newBook.isbn, genre_id: id })
      )
    : await BookGenre.create({ book_isbn: newBook.isbn, genre_id: book.genres });
  if (files) {
    await BookCover.create({
      contentType: files.cover.mimetype,
      image: files.cover.data,
      book_isbn: newBook.isbn,
    });
  }
  return book;
}

async function update(isbn, updatedBook, files) {
  const book = await Book.findByPk(isbn);
  Object.assign(book, updatedBook);
  await BookGenre.destroy({ where: { book_isbn: book.isbn } });
  Array.isArray(updatedBook.genres)
    ? updatedBook.genres.map((genre) =>
        BookGenre.create({ genre_id: genre, book_isbn: book.isbn })
      )
    : BookGenre.create({ genre_id: updatedBook.genres, book_isbn: book.isbn });
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
  return updatedBook;
}

async function remove(isbn) {
  await Book.destroy({ where: { isbn: isbn } });
  return isbn;
}
