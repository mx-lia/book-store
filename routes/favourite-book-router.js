const { Router } = require("express");
const passport = require("passport");

const router = Router();

const favouriteBookController = require("../controllers/favourite-book-controller");

module.exports = router;

router.get(
  "/favourites",
  passport.authenticate("jwt", { session: false }),
  favouriteBookController.getByCustomerId
);
router.post(
  "/favourite/new",
  passport.authenticate("jwt", { session: false }),
  favouriteBookController.create
);
router.delete(
  "/favourite/:id",
  passport.authenticate("jwt", { session: false }),
  favouriteBookController.remove
);
