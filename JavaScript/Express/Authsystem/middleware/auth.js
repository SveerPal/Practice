//const { request } = require("express")
const jwt= require("jsonwebtoken")

const auth= (req,res,next)=>{
    console.log(req.cookies)
    const {token}=req.cookies || req.headers || req.body
    //const token=req.headers("Authorization").replace("Bearer ","")
    if(!token){
        return res.status(401).send("token is missing")
    }
    //verify that there's a cookie called "token" with value of jwt token
    try {
        const decodeValue=jwt.verify(token,"shhh")
        console.log('decode',decodeValue);
        req.user=decodeValue
        //extract id from token and query the db
    } catch (error) {
        res.status(403).send("tocken is invalid")
        //console.log(error)
    }

    return next()
    //if(!req.cookies["token"]) return res.redirect("/")
    //    verify that the token is valid
}

module.exports=auth