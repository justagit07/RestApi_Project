import mongoose from "mongoose"
import {ApiError} from "../utility/ApiError.js"
import {AsyncHandler} from "../utility/AsyncHandler.js"
import  {Url} from "../model/urlSchema.js"


const redirectuser= async (req,res)=>
{

    const {id} = req.params
    const entry=  await  Url.findOneAndUpdate({shortid:id}, {$push:{visithistory:{timestamp: Date.now()}}})
    const ress= entry.originalurl
    res.redirect(`https://${ress}`)
}

export {redirectuser}