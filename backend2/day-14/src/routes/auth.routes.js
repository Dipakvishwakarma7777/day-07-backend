const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/auth.controller");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/register", authController.registerController);

authRouter.post("/login", authController.loginController);

module.exports = authRouter;
