const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://dipak:0d1mzxph9dhwoxCp@cluster0.9lusik1.mongodb.net/app",
    )
    .then(() => {
      console.log("connected to Db");
    });
}

module.exports = connectToDb;
