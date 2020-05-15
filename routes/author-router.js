const { Router } = require("express");

const router = Router();

const authorController = require("../controllers/author-controller");

module.exports = router;

router.get("/authors", authorController.getAll);
router.post("/author/new", authorController.create);
router.delete("/author/:id", authorController.remove);
