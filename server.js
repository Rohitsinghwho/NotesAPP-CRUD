// importing express from express;
const express= require('express');
// importing database from database;
const connecttoDb=require('./Database/database.js')
const app= express();
// connecting to database
connecttoDb();
// listening on port
// Routes
app.use(express.json());
app.use("/api/notes", require('./routes/notes')) ;
app.listen(5000,()=>{
    console.log("App is running on http://localhost:5000");
})
