const { Router } = require("express");
const passport = require("passport");
const rolesConfig = require("../config/roles-config");
const { allowOnly } = require("../middlewares/role-check");

const router = Router();

const genreController = require("../controllers/genre-controller");

module.exports = router;

router.get("/genres", genreController.getAll);

router.post(
  "/genre/new",
  passport.authenticate("jwt", { session: false }),
  allowOnly(rolesConfig.ACCESS_LEVELS.admin, genreController.create)
);
