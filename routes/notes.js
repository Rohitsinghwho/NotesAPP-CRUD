const notesModel = require("../models/notesschema.js");
const express = require("express");

const router = express.Router();

// Route =1  , creating notes on api api/notes/addNotes
router.get("/addNotes", async (req, res) => {
  const notes = new notesModel({
    title: req.body.title,
    Description: req.body.Description,
  });
  // save to database
  const savedNotes = await notes.save();
  // display as json data
  res.json(savedNotes);
});

module.exports = router;
