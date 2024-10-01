require("dotenv").config();
const connectDB = require("./db/connect");
const songus = require("./models/songs");
const mysongsjson = require("./mysongs.json")

const start = async()=>{
    try {
        await connectDB(process.env.Mongodb_uri);
        await songus.deleteMany();
        await songus.create(mysongsjson);
        console.log("success");


    } catch (error) {
        console.log(error);
    }
};

start();