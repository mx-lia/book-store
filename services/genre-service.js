const { Genre } = require("../sequelize");

module.exports = {
  getAll,
  create,
};

async function getAll() {
  return await Genre.findAll();
}

async function create(genre) {
  const newGenre = new Genre(genre);
  return await newGenre.save();
}
