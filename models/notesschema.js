const {mongoose,Schema}= require('mongoose');

const notesSchema= new Schema({
   
    title:{
        type:String,
        require:true
    },
    Description:{
        type:String,
        require:true
    }
})

module.exports= notesModel= mongoose.model('notesModel', notesSchema);
