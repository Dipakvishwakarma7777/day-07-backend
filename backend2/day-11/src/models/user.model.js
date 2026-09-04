const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: [true, "email already exists"],
    require: true,
  },

  password: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model("userData", userSchema);

module.exports = userModel;
