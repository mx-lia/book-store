const { Author } = require("../sequelize");

module.exports = {
  getAll,
  create,
};

async function getAll() {
  return await Author.findAll();
}

async function create(author) {
  const newAuthor = new Author(author);
  return await newAuthor.save();
}
