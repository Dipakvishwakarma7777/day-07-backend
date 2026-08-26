const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models");
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const isUserAlreayExists = await userModel.findOne({ email });

  if (isUserAlreayExists) {
    return res.status(409).json({
      message: "with email user already exists",
    });
  }

  const user = await userModel.create({
    username,
    email,
    password,
  });

  const token = jwt.sign(
    {
      user: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user register successfully",
    user,
    token,
  });
});

authRouter.post("/protected", (req, res) => {
  const token = req.cookies;
  console.log(token);

  res.status(201).json({
    message: "cookie fetch successfully",
    token,
  });
});
module.exports = authRouter;
