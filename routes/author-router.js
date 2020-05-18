const { Router } = require("express");
const passport = require("passport");
const rolesConfig = require("../config/roles-config");
const { allowOnly } = require("../middlewares/role-check");

const router = Router();

const authorController = require("../controllers/author-controller");

module.exports = router;

router.get("/authors", authorController.getAll);

router.post(
  "/author/new",
  passport.authenticate("jwt", { session: false }),
  allowOnly(rolesConfig.ACCESS_LEVELS.admin, authorController.create)
);
