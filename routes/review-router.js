const { Router } = require("express");
const passport = require("passport");
const rolesConfig = require("../config/roles-config");
const { allowOnly } = require("../middlewares/role-check");

const router = Router();

const reviewController = require("../controllers/review-controller");

module.exports = router;

router.get("/reviews/:isbn", reviewController.getByBookIsbn);

router.post(
  "/review/new",
  passport.authenticate("jwt", { session: false }),
  allowOnly(rolesConfig.ACCESS_LEVELS.user, reviewController.create)
);
