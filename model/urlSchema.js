import mongoose from "mongoose";
const url_schema=  new mongoose.Schema(
    {


       shortid:
       {
        type :String,
        required:true
       },

       originalurl:
       {
        type :String,
        required:true
       },
       visithistory:[{timestamp:{type:number}}]
    },
    {
        timestamps:true
    }
)

export const  url = mongoose.model("Url", url_schema)