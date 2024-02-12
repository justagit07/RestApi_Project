import {ApiError} from "../utility/ApiError.js"
import {AsyncHandler} from "../utility/AsyncHandler.js"
import  {Url} from "../model/urlSchema.js"
import { nanoid } from "nanoid";

const urllogic = AsyncHandler(async function (req,res,err)
{
    const body= req.body
   
    if(!body.url)
    {
        throw new ApiError( 400 , "Bad request", 'your are posting empty field')
    }
    const alreadyexist= await Url.findOne({originalurl:body.url})
    if (alreadyexist)
    {
        res.render('home', {shortid: alreadyexist.shortid})
    }
    else
    {

        const Miniid = nanoid(4)
        const x =await Url.create({
            shortid:Miniid,
            originalurl:body.url,
            visithistory:[]
        })
        console.log(x);   
        res.render('home', {shortid: x.shortid})
    }
    } );


export {urllogic}