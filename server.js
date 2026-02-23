require("dotenv").config();
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app = require("./src/app");
const mongoose = require("mongoose");
const connectToDb = require("./src/config/database");



connectToDb();

app.listen(3000, (req, res) => {
  console.log("Server Running No Port");
});
