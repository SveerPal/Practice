const mongoose=require('mongoose');

const MONGODB_URL=process.env.MONGODB_URL

exports.connect = () =>{
    mongoose.connect(MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then("DB Connected Successfully")
    .catch((Error)=>{
        console.log(`error in connecting to DB ${err}`)
        process.exit(1)
    })
}