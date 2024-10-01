require("dotenv").config();
const express =require("express");
const app =express();
const connectDB= require("./db/connect");
const PORT  = process.env.PORT || 5000;
const songs_routes= require("./routes/songs");
app.get("/",(req,res)=>{
    res.send("hi i am live");
})

app.use("/api/mysong",songs_routes)

const start= async()=>{
    try {

        await connectDB(process.env.Mongodb_uri);

        app.listen(PORT,()=>{
           console.log( `${PORT} lets start`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();