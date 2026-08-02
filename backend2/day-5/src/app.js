const express = require("express");

const app = express();
app.use(express.json());
const notes = [];

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
    message: "all patch successfully",
  });
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "notes created successfully",
  });
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index] = req.body.des;

  res.status(200).json({
    message: "notes updated successfully",
  });
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.status(200).json({
    message: "note delete successfully",
  });
});

module.exports = app;
