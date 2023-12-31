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

// Route=3, Fetch specific note notes on api/notes/fetchNotes/:id
router.get("/fetchNotes/:id",async(req,res)=>{
  try {
    const UserID= await notesModel.findById(req.params.id);
    res.json(UserID);
  } catch (error) {
    res.status(400).send("Bad Request");
  }
  
})

// Route=4, fetch all notes on api/notes/fetchall
router.get("/fetchall",async(req,res)=>{
  try {
    const User= await notesModel.find({});
    res.json(User);
  } catch (error) {
    res.status(400).send("Bad Request");
  }
  
})

// Route=5, update note on api/notes/update/:id

router.put("/updateNote/:id",async(req,res)=>{
  
  const {title,Description}=req.body;
  try {
    const note= {}
    if(title){
      note.title=title;
      
    }
    if(Description){
      note.Description=Description;
    }
    const UserID= await notesModel.findById(req.params.id);
    const userUpdate= await notesModel.findByIdAndUpdate(UserID, { $set: note },
      { new: true })

      res.status(200).json({userUpdate})
  } catch (error) {
    res.status(400).send("Bad Request");
  }
})
module.exports = router;
