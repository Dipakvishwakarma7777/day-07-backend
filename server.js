const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const app = require("./src/app");
const mongoose = require("mongoose");
const connectToDb = require("./src/config/database");
const noteModel = require("./src/models/note.models");
app.use(express.json());
connectToDb();

app.post("/note", async (req, res) => {
  const { user, age } = req.body;
  const Note = await noteModel.create({
    user,
    age,
  });
  res.status(201).json({
    message: "note created successfully",
    Note,
  });
});
app.listen(3000, () => {
  console.log("server running on port");
});
