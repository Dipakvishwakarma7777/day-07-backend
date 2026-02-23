const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  name: String,
  email: String,
});

const noteModel = mongoose.model("day-07", noteSchema);

module.exports = noteModel;
