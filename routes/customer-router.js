const { Router } = require("express");
const passport = require("passport");
const rolesConfig = require("../config/roles-config");
const { allowOnly } = require("../middlewares/role-check");

const router = Router();

const customerController = require("../controllers/customer-controller");

module.exports = router;

router.post(
  "/auth/signup",
  passport.authenticate("signup", { session: false }),
  customerController.authentificate
);

router.post(
  "/auth/signin",
  passport.authenticate("signin", { session: false }),
  customerController.authentificate
);

router.get(
  "/auth/signout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.clearCookie("jwt").json({ message: "Sign out is successful" });
  }
);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    session: false,
    scope: ["email", "profile"],
  })
);

router.get(
  "/auth/google/redirect",
  passport.authenticate("google", {
    session: false,
    scope: ["email", "profile"],
    failureRedirect: "https://localhost:4000/auth/failed",
  }),
  customerController.authentificate
);

router.get("/auth/failed", (req, res) => {
  res.redirect("https://localhost:3000/");
});

router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({ user: req.user });
  }
);

router.get(
  "/customer",
  passport.authenticate("jwt", { session: false }),
  allowOnly(rolesConfig.ACCESS_LEVELS.user, customerController.getById)
);

router.put(
  "/customer",
  passport.authenticate("jwt", { session: false }),
  allowOnly(rolesConfig.ACCESS_LEVELS.user, customerController.update)
);
