const { BookCover } = require('../sequelize');

module.exports = {
    getById,
    getByBook,
    create,
    update,
    remove
};

async function getById(id) {
    return await BookCover.findByPk(id);
}

async function getByBook(isbn) {
    return await BookCover.findOne({ where: { book: isbn } });
}

async function create(bookCover) {
    const newBookCover = new BookCover(bookCover);
    await newBookCover.save();
}

async function update(id, bookCoverParams) {
    const bookCover = await BookCover.findByPk(id);
    if (!bookCover) throw 'Book cover not found';
    Object.assign(bookCover, bookCoverParams);
    await bookCover.save();
}

async function remove(id) {
    await BookCover.destroy({ where: { id } });
}