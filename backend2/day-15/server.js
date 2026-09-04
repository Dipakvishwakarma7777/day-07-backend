const app = require("./src/app");

const dns = require("node:dns");
const connectToDb = require("./src/config/database");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

app.listen(3000, () => {
  console.log("server is Running On Port No :3000");
});

connectToDb();
