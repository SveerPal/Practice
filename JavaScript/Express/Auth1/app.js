require("dotenv").config()
const express=require("express")
const User =require("./model/user")
const app=express();



app.get("/",(req,res)=>{
    res.send("<h1>Welcome In App Test</h1>")
})
app.post("/signup",async (req,res)=>{
    const {firstname,lastname,email,password}=req.body
    if(!(firstname && lastname && email && password)){
        res.status(400).send("all fields are required")
    }

    const ExistingUser= await User.findOne(email)
    if(ExistingUser){
        //return  res.json({message:"Email Already Exists"})
        res.status(400).send("Email Already Exist")
    }
})
module.exports =app;