const mongoose = require('mongoose');

const reelsSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required:true
    }
});
module.exports=mongoose.model('Reels',reelsSchema);

