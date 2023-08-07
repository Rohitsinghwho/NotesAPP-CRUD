const express= require('express');
const connecttoDb=require('./Database/database.js')
const app= express();

app.listen(5000,()=>{
    console.log("App is running on http://localhost:5000");
})

connecttoDb();