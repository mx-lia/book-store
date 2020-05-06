const { Router } = require("express");

const router = Router();

const bookController = require("../controllers/book-controller");

module.exports = router;

router.get(
  "/books",
  bookController.getAll
);

router.get(
  "/book/:isbn",
  bookController.getByIsbn
);