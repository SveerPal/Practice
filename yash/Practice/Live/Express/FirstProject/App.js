const express = require('express')
const app = express()
const port = 3000


app.get("/",(req,res)=>{
    //res.send('Hello Js Camp 1.0')
    res.status(200).send("Hello From Yash")
})
//http://localhost:3000/yash
app.get("/yash",(req,res)=>{
    res.send('Linkdin')
})

//http://localhost:3000/insta
app.get("/insta",(req,res)=>{ 
    const insta={
        name:"Yash",
        follower:70,
        follwing:80
    }
    res.status(200).json({insta})
})

//http://localhost:3000/fb/yash
app.get("/fb/:token",(req,res)=>{ 
    console.log(req.params.token)
    res.status(200).json({name:req.params.token})
    // const fb={
    //     name:"Yash",
    //     follower:70,
    //     follwing:80,
    //     friends:200
    // }
    //res.status(200).json({fb})
})
//http://localhost:3000/features
app.get("/features",(req,res)=>{
    res.send('A test runnr is built for human new ttt')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})