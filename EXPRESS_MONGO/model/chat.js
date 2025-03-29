const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:50
    },
    when:{
        type:Date,
        required:true
    }
});

let Chat = new mongoose.model("Chat",schema);

module.exports = Chat;