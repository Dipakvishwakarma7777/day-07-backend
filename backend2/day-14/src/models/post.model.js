const mongoose = require("mongoose");

const postModel = new mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },

  imgUrl: {
    type: String,
    required: [true, "Img_url is required for creating an post"],
  },

  users: {
    ref: "users",
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "user id is required for creating an post"],
  },
});
