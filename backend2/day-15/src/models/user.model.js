const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "with username user Already Exists"],
    require: [true, "username is required"],
  },

  email: {
    type: String,
    unique: [true, "with email user Already Exists"],
    require: [true, "email is required"],
  },

  password: {
    type: String,
    require: [true, "password is require"],
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
