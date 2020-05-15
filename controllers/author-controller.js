
const authorService = require('../services/author-service');

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};

function getAll(req, res, next) {
    authorService.getAll()
        .then(authors => res.json(authors))
        .catch(err => next(err));
}

function getById(req, res, next) {
    authorService.getById(req.params.id)
        .then(author => author ? res.json(author) : res.sendStatus(404))
        .catch(err => next(err));
}

function create(req, res, next) {
    authorService.create(req.body)
        .then((author) => res.json(author))
        .catch(err => next(err));
}

function update(req, res, next) {
    authorService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function remove(req, res, next) {
    authorService.remove(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
