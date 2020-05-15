const { Router } = require("express");

const router = Router();

const publisherController = require("../controllers/publisher-controller");

module.exports = router;

router.get("/publishers", publisherController.getAll);
router.post("/publisher/new", publisherController.create);
router.delete("/publisher/:id", publisherController.remove);
