const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

main().then((res)=>{
    console.log("CONNECTION TO DB WAS SUCCESSFULL");
}).catch(err => console.log(err));

const schema = new mongoose.Schema({
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

const Chat = new mongoose.model("Chat",schema);

let Allchats = [
    {
        from:"vikas",
        to:"vikas2",
        msg:"hello",
        when: new Date()
    },
    {
        from:"vikas2",
        to:"vikas3",
        msg:"hello2",
        when: new Date()
    },
    {
        from:"vikas3",
        to:"vikas4",
        msg:"hello3",
        when: new Date()
    },
    {
        from:"vikas4",
        to:"vikas5",
        msg:"hello4",
        when: new Date()
    },
    {
        from:"vikas5",
        to:"vikas6",
        msg:"hello5",
        when: new Date()
    },
];

Chat.insertMany(Allchats);