const mongoose= require('mongoose');

const connecttoDb=()=>{
    mongoose.connect("mongodb://127.0.0.0:27017");
    console.log("connected to mongoose successfully")
}

module.exports = connecttoDb;