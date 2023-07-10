const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const { CartController } = require("../controllers/cart.controller");

const router = Router();

router.get("/user-cart", authMiddleware, CartController.getUserCart);

module.exports = router;