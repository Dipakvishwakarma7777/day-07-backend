const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userModel = require("../models/user.model");

const authRoutes = express.Router();

authRoutes.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(404).json({
      message: "with user already exists",
    });
  }

  const user = await userModel.create({
    username,
    email,
    password: crypto.createHash("md5").update(password).digest("hex"),
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user Register Successfully",
    user,
    token,
  });
});

authRoutes.get("/get-me", async (req, res) => {
  const token = req.cookies.jwt_token;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await userModel.findById(decoded.id);
  console.log(decoded.id);

  res.json({
    user: {
      user: user.username,
      email: user.email,
    },
  });
});

authRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  const hash = crypto.createHash("md5").update(password).digest("hex");

  const isPasswordMatched = hash === user.password;

  if (!isPasswordMatched) {
    res.status(404).json({
      message: "Invaild password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User Logged In Successfully",
    user: {
      user: user.username,
      email: user.email,
    },
  });
});

module.exports = authRoutes;
