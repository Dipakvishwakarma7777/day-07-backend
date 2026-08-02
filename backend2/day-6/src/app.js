const express = require("express");

const app = express();
app.use(express.json());
const note = [];

app.get("/note", (req, res) => {
  res.status(200).json({
    note: note,
    message: "data fatch successfully",
  });
});

app.post("/note", (req, res) => {
  note.push(req.body);
  res.status(201).json({
    message: "note created successfully",
  });
});

app.delete("/note/:index", (req, res) => {
  delete note[req.params.index];
  res.status(200).json({
    message: "note deleted successfuly ",
  });
});

app.patch("/note/:index", (req, res) => {
  note[req.params.index] = req.body;
  res.status(200).json({
    message: "note updated successfully",
  });
});

module.exports = app;
