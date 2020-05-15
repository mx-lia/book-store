
const publisherService = require('../services/publisher-service');

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};

function getAll(req, res, next) {
    publisherService.getAll()
        .then(publishers => res.json(publishers))
        .catch(err => next(err));
}

function getById(req, res, next) {
    publisherService.getById(req.params.id)
        .then(publisher => publisher ? res.json(publisher) : res.sendStatus(404))
        .catch(err => next(err));
}

function create(req, res, next) {
    publisherService.create(req.body)
        .then((publisher) => res.json(publisher))
        .catch(err => next(err));
}

function update(req, res, next) {
    publisherService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function remove(req, res, next) {
    publisherService.remove(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
