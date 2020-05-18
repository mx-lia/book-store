const { Router } = require("express");
const passport = require("passport");
const rolesConfig = require("../config/roles-config");
const { allowOnly } = require("../middlewares/role-check");

const router = Router();

const publisherController = require("../controllers/publisher-controller");

module.exports = router;

router.get("/publishers", publisherController.getAll);

router.post(
  "/publisher/new",
  passport.authenticate("jwt", { session: false }),
  allowOnly(rolesConfig.ACCESS_LEVELS.admin, publisherController.create)
);
