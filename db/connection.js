import dotenv from "dotenv"
dotenv.config({path: "./.env"})
import mongoose from 'mongoose'

const connectdb= async function()
{
    try{
      const conn=   await mongoose.connect(`${process.env.MONGODB_URI}/shortid`)
      console.log("The connection is established at the host db:\n", conn.connection.host)

    }
    catch(err)
    {
       console.log('Problem in connection the database !!!!!', err);
       process.exit(1)   
    }
}

export {connectdb}