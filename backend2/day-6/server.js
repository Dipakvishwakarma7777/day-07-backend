const app = require("./src/app");
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose = require("mongoose");
function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://vishwakarmadipak480_db_user:rfZ4iEHo8P7KfEgr@dipak.x5fo86s.mongodb.net/day-6",
    )
    .then(() => {
      console.log("connected to the database");
    });
}

connectToDb();
app.listen(3000, () => {
  console.log("server is running on port number 3000");
});
