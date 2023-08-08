const notesModel = require("../models/notesschema.js");
const express = require("express");

const router = express.Router();

// Route =1  , creating notes on api api/notes/addNotes
router.get("/addNotes", async (req, res) => {
  try {
    const notes = new notesModel({
      title: req.body.title,
      Description: req.body.Description,
    });
    // save to database
    const savedNotes = await notes.save();
    // display as json data
    res.json(savedNotes);
  } catch (error) {
    res.status(400).send("Not Allowed");
  }
});

// Route= 2, Deleting notes on api/notes/deleteNotes:_id
router.delete("/deleteNotes/:id", async (req, res) => {
  try {
    const userID = await notesModel.findById(req.params.id);
    if (!userID) {
      res.status(401).send("No Notes present");
    } else {
      const DeleteNote = await notesModel.findByIdAndDelete(userID);
      console.log("Note Deleted Successfully ");
      res.status(200).json(DeleteNote);
    }
  } catch (error) {
    res.status(400).send("Bad Request");
  }
});
module.exports = router;
