const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const connect = require("./config/db");

const PORT = process.env.PORT;

const movieControler = require("./controller/movie.controller");

app.use("/", movieControler);

app.listen(PORT, async()=>{
    try{
        await connect()
        console.log("DB is Connected..!");
    }catch(err){
        console.log(err);
        
    }
})

