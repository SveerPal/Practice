require('dotenv').config()



require("./config/database").connect();
const express=require("express")
const jwt= require("jsonwebtoken")
const bcryptjs=require("bcryptjs")
var cookieParser = require('cookie-parser')

//custom middleware
const auth = require('./middleware/auth')

// import model - user

const User=require("./model/user")

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.get("/",(req,res)=>{
    res.send("Hello Auth System")
})

// app.post("/register",(req,res)=>{
//     console.log(req.body)
// })
app.post("/register", async(req,res)=>{
    try {
        // collect all information
        const{firstname,lastname,email,password}=req.body
        //validate the data if exists
        if (!(firstname && lastname && email && password)) {
            res.status(401).send("All Fields are required")
        }

        //check if user exists or not 
        //await User.findOne({email:email})
        const existingUser= await User.findOne({email})//when same key from database  and variable 
        if(existingUser){
            res.status(401).send("Email is already exist")
        }
        // encrypt the password
        const myEncryptPassword = await bcryptjs.hash(password,10)

        //Create ENtry in database
        const userCreated = await User.create({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:myEncryptPassword,
        })

        //create a token
        const token=jwt.sign({
            //user._id:userCreated._id,
            //id:userCreated._id,
            id:userCreated._id,email,
        },"shhh",{expiresIn:"2h"})

        userCreated.token=token
        userCreated.password=undefined

        res.status(201).json(userCreated)

    } catch (error) {
        console.log(error)
        console.log("error is response route")
    }
})

app.post("/login", async(req,res)=>{
    try {
        //collect information from frontend
        const {email,password}=req.body
        //validate
        if(!(email && password)){
            res.status(401).send("email and password is required")
        }
        //check user if exist in database
        const user=await User.findOne({
            email:email
        })
        //match the password
        if(user && (await bcryptjs.compare(password,user.password))){
            const token=jwt.sign({id: user._id,email},"shhh",{expiresIn:"2h"})
            user.password=undefined
            user.token=token

            //set cookies 
            const options={
                expires:new Date(Date.now()+ 3*24*60*60*1000),
                httpOnly:true
            }

            res.status(201).cookie("token",token,options).json({
                success:true,
                token,
                user
            })
        }
        
        //create token and send 
        res.sendStatus(401).send("email or password is incorrect")
    } catch (error) {
        console.log(error)
    }
})

app.get("/dashboard", auth, (req,res) =>{
    console.log(req.cookies);
    const tocken=req.cookies
    res.send("Welcome to dashboard")    
})

app.get("/profile",auth,(req,res)=>{
    //Access to req.user=id,email

    //based on id query on db and get all information of user -findOne({id})

    //send json res with all data 
    //const id = req.userId;
})

module.exports=app