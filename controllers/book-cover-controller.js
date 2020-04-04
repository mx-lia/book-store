
const bookCoverService = require('../services/book-cover-service');

module.exports = {
    getByBook,
    getById,
    create,
    update,
    remove
};

function getByBook(req, res, next) {
    bookCoverService.getByBook(req.params.isbn)
        .then(covers => res.json(covers))
        .catch(err => next(err));
}

function getById(req, res, next) {
    bookCoverService.getById(req.params.id)
        .then(bookCover => bookCover ? res.json(bookCover) : res.sendStatus(404))
        .catch(err => next(err));
}

function create(req, res, next) {
    bookCoverService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function update(req, res, next) {
    bookCoverService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function remove(req, res, next) {
    bookCoverService.remove(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}