const mongoose =require("mongoose");
//uri = "mongodb+srv://amanchauhan30072002:NsP7HmSDWzLME1iO@amanapi.dvjqw.mongodb.net/?retryWrites=true&w=majority&appName=Amanapi";
const connectDB=(uri)=>{
    console.log("connect")
    return mongoose.connect(uri,{
       
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports=connectDB;