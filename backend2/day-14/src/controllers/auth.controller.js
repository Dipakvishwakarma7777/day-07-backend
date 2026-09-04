const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerController(req, res) {
  const { username, email, password, bio, profileImg } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    $or: [
      {
        username,
      },
      {
        email,
      },
    ],
  });

  if (isUserAlreadyExist) {
    return res.status(404).json({
      massage:
        "Is User Already Exists" + isUserAlreadyExist.username == username
          ? "Username Already Exists Try Another Username"
          : "Email already Try To Another Email",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profileImg,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User Register Successfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImg: user.profileImg,
    },
  });
}

async function loginController(req, res) {
  const { email, username, password } = req.body;

  const user = await userModel.findOne({
    $or: [
      { username: username },
      {
        email: email,
      },
    ],
  });

  if (!user) {
    return res.status(404).json({
      message: "User not Found",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(402).json({
      message: "invaild password",
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
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImg: user.profileImg,
    },
  });
}

module.exports = {
  registerController,
  loginController,
};
