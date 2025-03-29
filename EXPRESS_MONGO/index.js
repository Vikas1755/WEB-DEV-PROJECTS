const express = require("express");
const port = 8080;
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const { type } = require("os");
const methodOverride = require('method-override')

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

main().then((res)=>{
    console.log("CONNECTION TO DB WAS SUCCESSFULL");
}).catch(err => console.log(err));

//run init.js to initalize the DataBase

let Chat = require("./model/chat.js");

app.listen(port,()=>{
    console.log("listning at port 8080");
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/chats", async (req,res)=>{
    let chats = await Chat.find(); //dont forget async await
    res.render("index.ejs",{chats});
});

app.get("/chats/update/:id", async (req,res)=>{
    let {id} = req.params;
    let chatUpdate = await Chat.findById(id);
    res.render("update.ejs",{chatUpdate});
});

app.patch("/chats/update/:id",async(req,res)=>{
    let {id} = req.params;
    let updateMsg = req.body.msg;
    let update = await Chat.findByIdAndUpdate(id,{msg:updateMsg});
    res.redirect("/chats");
});

app.get("/chats/delete/:id", async (req,res)=>{
    let {id} = req.params;
    let chatDel = await Chat.findByIdAndDelete(id);
    console.log(chatDel);
    res.redirect("/chats");
});

app.get("/chats/new",(req,res)=>{
    res.render("add.ejs");
});

app.post("/chats/new",async (req,res)=>{
    await Chat.insertOne({from:`${req.body.from}`,to:`${req.body.to}`,msg:`${req.body.msg}`,when: new Date()});
    res.redirect("/chats");
});