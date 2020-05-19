const { Router } = require("express");
const passport = require("passport");
const rolesConfig = require("../config/roles-config");
const { allowOnly } = require("../middlewares/role-check");

const router = Router();

const bookController = require("../controllers/book-controller");

module.exports = router;

router.get("/books", bookController.getAll);

router.get("/book/:isbn", bookController.getByIsbn);

router.post(
  "/book/new",
  passport.authenticate("jwt", { session: false }),
  allowOnly(rolesConfig.ACCESS_LEVELS.admin, bookController.create)
);

router.put(
  "/book/:isbn",
  passport.authenticate("jwt", { session: false }),
  allowOnly(rolesConfig.ACCESS_LEVELS.admin, bookController.update)
);

router.delete(
  "/book/:isbn",
  passport.authenticate("jwt", { session: false }),
  allowOnly(rolesConfig.ACCESS_LEVELS.admin, bookController.remove)
);
