const { Publisher } = require("../sequelize");

module.exports = {
  getAll,
  create,
};

async function getAll() {
  return await Publisher.findAll();
}

async function create(publisher) {
  const newPublisher = new Publisher(publisher);
  return await newPublisher.save();
}
