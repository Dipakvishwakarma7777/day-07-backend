const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "with username user already exists"],
    require: [true, " username are require"],
  },
  email: {
    type: String,
    unique: [true, "with email user already exists"],
    require: [true, " email are require"],
  },

  password: {
    type: String,
    require: [true, " password are require"],
  },

  bio: String,

  profileImg: {
    type: String,
    default:
      "https://ik.imagekit.io/tr8ntx1ks/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2191.avif?updatedAt=1788333596725",
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
