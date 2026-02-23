const express = require("express");
const mongoose = require("mongoose");
const app = express();
const noteModel = require("./model/note.models");
app.use(express.json());

app.post("/note", async (req, res) => {
  const { name, email } = req.body;
  const note = await noteModel.create({
    name,
    email,
  });
  res.status(201).json({
    message: "note cretaed successfully",
    note,
  });
});

app.get("/back", async (req, res) => {
  const note = await noteModel.find();
  res.status(200).json({
    message: "note fetch successfull",
    note,
  });
});

module.exports = app;
