const express = require("express");
const {connection} = require("./config/db")
const app = express();

app.listen(3000,async()=>{
    try {
        await connection
        console.log("connected to mongodb")
    } catch (error) {
        console.log("Not connected to mongodb")
    }
    console.log("server is runnin at port 3000")
})