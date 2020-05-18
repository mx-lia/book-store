const { Router } = require("express");
const passport = require("passport");
const router = Router();

const reviewController = require("../controllers/review-controller");

module.exports = router;

router.get("/reviews/:isbn", reviewController.getByBookIsbn);
router.post(
  "/review/new",
  passport.authenticate("jwt", { session: false }),
  reviewController.create
);
router.delete(
  "/review/:id",
  passport.authenticate("jwt", { session: false }),
  reviewController.remove
);
