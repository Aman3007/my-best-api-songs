const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
songname:{
    type : String,
    required : true,
},
artistname:{
    type : String,
    required: true,
},
language:{
    type : String,
    enum:{
        values:["hindi","english","punjabi"],
        message:`{value} not present`,
    },
},


});


module.exports= mongoose.model("Song",songSchema);