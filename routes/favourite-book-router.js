const { Router } = require("express");
const passport = require("passport");
const rolesConfig = require("../config/roles-config");
const { allowOnly } = require("../middlewares/role-check");

const router = Router();

const favouriteBookController = require("../controllers/favourite-book-controller");

module.exports = router;

router.get(
  "/favourites",
  passport.authenticate("jwt", { session: false }),
  allowOnly(
    rolesConfig.ACCESS_LEVELS.user,
    favouriteBookController.getByCustomerId
  )
);

router.post(
  "/favourite/new",
  passport.authenticate("jwt", { session: false }),
  allowOnly(rolesConfig.ACCESS_LEVELS.user, favouriteBookController.create)
);

router.delete(
  "/favourite/:id",
  passport.authenticate("jwt", { session: false }),
  allowOnly(rolesConfig.ACCESS_LEVELS.user, favouriteBookController.remove)
);
