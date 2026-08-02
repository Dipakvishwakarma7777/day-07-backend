require("dotenv").config();
const app = require("./src/app");

const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const connectToDb = require("./src/config/database");

connectToDb();

app.listen(3000, () => {
  console.log("server is running on port no 3000");
});
