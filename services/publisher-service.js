const { Publisher } = require('../sequelize');

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};

async function getAll() {
    return await Publisher.findAll();
}

async function getById(id) {
    return await Publisher.findByPk(id);
}

async function create(publisher) {
    const newPublisher = new Publisher(publisher);
    return await newPublisher.save();
}

async function update(id, publisherParams) {
    const publisher = await Publisher.findByPk(id);
    if (!publisher) throw 'Publisher not found';
    Object.assign(publisher, publisherParams);
    await publisher.save();
}

async function remove(id) {
    await Publisher.destroy({ where: { id } });
}