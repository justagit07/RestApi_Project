import dotenv from "dotenv"
dotenv.config({path: "./.env"})
import {connectdb} from "./db/connection.js"
import  express from "express"


const app= express();
connectdb()

app.listen(process.env.PORT, ()=>
{
    console.log(`your server is live on the: http://localhost:${process.env.PORT}`);    
}).on("error", ()=>
{
    console.log("Couldn't able able to connect with server")
})

