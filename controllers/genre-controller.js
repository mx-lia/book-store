const genreService = require('../services/genre-service');

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};

function getAll(req, res, next) {
    genreService.getAll()
        .then(genres => res.json(genres))
        .catch(err => next(err));
}

function getById(req, res, next) {
    genreService.getById(req.params.id)
        .then(genre => genre ? res.json(genre) : res.sendStatus(404))
        .catch(err => next(err));
}

function create(req, res, next) {
    genreService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function update(req, res, next) {
    genreService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function remove(req, res, next) {
    genreService.remove(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
