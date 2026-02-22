const mongoose = require("mongoose");
const noteScheme = mongoose.Schema({
  user: String,
  age: Number,
});

const noteModel = mongoose.model("mongoose", noteScheme);

module.exports = noteModel;
