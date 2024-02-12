import dotenv from "dotenv"
dotenv.config({path: "./.env"})
import {connectdb} from "./db/connection.js"
import  express from "express"
import ejs from "ejs"
import Path  from "path"
const app= express();

connectdb()


app.set("view engine", 'ejs')
app.set("views", Path.resolve("./views"))
app.listen(process.env.PORT, ()=>
{
    console.log(`your server is live on the: http://localhost:${process.env.PORT}`)
})
     .on("error", ()=>
     
     { console.log("Couldn't able able to connect with server")})

     

app.use(express.json())
app.use(express.urlencoded())
import  urlroutes from "./routes/url.route.js"

app.use("/", urlroutes)



