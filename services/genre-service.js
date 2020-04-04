const { Genre } = require('../sequelize');

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};

async function getAll() {
    return await Genre.findAll();
}

async function getById(id) {
    return await Genre.findByPk(id);
}

async function create(genre) {
    const newGenre = new Genre(genre);
    await newGenre.save();
}

async function update(id, genreParams) {
    const genre = await Genre.findByPk(id);
    if (!genre) throw 'Genre not found';
    Object.assign(genre, genreParams);
    await genre.save();
}

async function remove(id) {
    await Genre.destroy({ where: { id } });
}