const mongoose=require("mongoose")

const {MONGO_URL} =process.env

exports.connect=()=>{
    mongoose.connect(MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(console.log("DB Connection Successfully"))
    .catch(error=>{
        console.log(`Error in DB connection ${error}`)  //this will be printed if there is any error while connecting to the database
        process.exit;
    })
}