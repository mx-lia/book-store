const { Router } = require("express");

const router = Router();

const genreController = require("../controllers/genre-controller");

module.exports = router;

router.get("/genres", genreController.getAll);
router.post("/genre/new", genreController.create);
router.delete("/genre/:id", genreController.remove);