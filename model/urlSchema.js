import mongoose from "mongoose";
const url_schema=  new mongoose.Schema(
    {


       shortid:
       {
        type :String,
        required:true,
        unique:true
       },

       originalurl:
       {
        type :String,
        required:true
       },
       visithistory: [{ timestamp: { type: Number } }]
    },
    {
        timestamps:true
    }
)

export const  Url = mongoose.model("Url", url_schema)