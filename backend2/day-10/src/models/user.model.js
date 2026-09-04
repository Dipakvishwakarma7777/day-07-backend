const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uname: String,
  email: {
    type: String,
    unique: [true, "with email user already exists "],
  },
  password: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
