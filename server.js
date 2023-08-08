// importing express from express;
const express= require('express');
// importing database from database;
const connecttoDb=require('./Database/database.js')
const app= express();
app.use(express.json());
// connecting to database
connecttoDb();
// listening on port
app.listen(5000,()=>{
    console.log("App is running on http://localhost:5000");
})

// Routes
app.get('api/notes/',require()) ;