const express=require("express")

const app=express()

//View Engine Middleware
app.set("view engine","ejs")

//middleware
app.use(express.json())
app.use(express.urlencoded({
    extended:true,
}))

//  My home route
app.get("/",(req,res)=>{
    res.send("Hello Express")
})
//  My get route
app.get("/myget",(req,res)=>{
    console.log(req.body)
    res.send(req.query)
})

app.post("/mypost",(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

//Rendering the page
app.get('/getform', (req , res)=> {
    res.render("getform")
})
//Post Route
//Rendering the page
app.get('/postform', (req , res)=> {
    res.render("postform")
})

app.listen(3000,()=>{
    console.log('server is running')
})