const { Router } = require("express");

const router = Router();

const bookController = require("../controllers/book-controller");

module.exports = router;

router.get("/books", bookController.getAll);
router.get("/book/:isbn", bookController.getByIsbn);
router.post("/book/new", bookController.create);
router.put("/book/:isbn", bookController.update);
router.delete("/book/:isbn", bookController.remove);
