const { Book, BookGenre } = require('../sequelize');

module.exports = {
    getAll,
    getByIsbn,
    create,
    update,
    remove
};

async function getAll() {
    return await Book.findAll();
}

async function getByIsbn(isbn) {
    return await Book.findByPk(isbn);
}

async function create(book) {
    const newBook = new Book(book);
    await newBook.save();
    const newBookGenre = new BookGenre({book: book.isbn, genre: book.genre});
    await newBookGenre.save();
}

async function update(isbn, bookParams) {
    const book = await Book.findByPk(isbn);
    if (!book) throw 'Book not found';
    Object.assign(book, bookParams);
    await book.save();
}

async function remove(isbn) {
    await Book.destroy({ where: { id: isbn } });
}