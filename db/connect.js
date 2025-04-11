const mongoose =require("mongoose");
// uri = "";
const connectDB=(uri)=>{
    console.log("connect")
    return mongoose.connect(uri,{
       
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports=connectDB;


