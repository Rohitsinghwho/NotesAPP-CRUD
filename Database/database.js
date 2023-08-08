// importing mongoose from mongoose
const mongoose= require('mongoose');
// exporting database to the main server
module.exports= connecttoDb=()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/CurdDb").then(()=>{
        console.log("Database is connected to the server successfully!")
    }).catch((e)=>console.log(e));
}

