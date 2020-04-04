const { Author } = require('../sequelize');

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};

async function getAll() {
    return await Author.findAll();
}

async function getById(id) {
    return await Author.findByPk(id);
}

async function create(author) {
    const newAuthor = new Author(author);
    await newAuthor.save();
}

async function update(id, authorParams) {
    const author = await Author.findByPk(id);
    if (!author) throw 'Author not found';
    Object.assign(author, authorParams);
    await author.save();
}

async function remove(id) {
    await Author.destroy({ where: { id } });
}