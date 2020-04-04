
const bookService = require('../services/book-service');

module.exports = {
    getAll,
    getByIsbn,
    create,
    update,
    remove
};

function getAll(req, res, next) {
    bookService.getAll()
        .then(books => res.json(books))
        .catch(err => next(err));
}

function getByIsbn(req, res, next) {
    bookService.getByIsbn(req.params.isbn)
        .then(book => book ? res.json(book) : res.sendStatus(404))
        .catch(err => next(err));
}

function create(req, res, next) {
    bookService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function update(req, res, next) {
    bookService.update(req.params.isbn, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function remove(req, res, next) {
    bookService.remove(req.params.isbn)
        .then(() => res.json({}))
        .catch(err => next(err));
}
