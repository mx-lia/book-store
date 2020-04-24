const { Router } = require("express");
const passport = require("passport");

const router = Router();

const customerController = require("../controllers/customer-controller");
const orderController = require("../controllers/order-controller");
const bookController = require("../controllers/book-controller");

router.post(
  "/register",
  passport.authenticate("register", { session: false }),
  customerController.authentificate
);

router.post(
  "/login",
  passport.authenticate("register", { session: false }),
  customerController.authentificate
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
    successRedirect: "http://localhost:3000/"
  })
);

router.get("/customers", customerController.getAll);

router.get("/books", bookController.getAll);

router.get("/customer/:id", customerController.getById);

router.put("/customer/:id", customerController.update);

router.delete("/customer/:id", customerController.remove);

router.post("/order/create", orderController.create);

router.post("/book/create", bookController.create);

module.exports = router;
