const { Router } = require("express");
const passport = require("passport");
const router = Router();

const orderController = require("../controllers/order-controller");

module.exports = router;

router.get(
  "/orders",
  passport.authenticate("jwt", { session: false }),
  orderController.getByCustomerId
);

router.post(
  "/order/new",
  passport.authenticate("jwt", { session: false }),
  orderController.create
);
