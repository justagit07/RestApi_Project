import { ApiError } from "../utility/ApiError.js";
import { Url } from "../model/urlSchema.js";
import { AsyncHandler } from "../utility/AsyncHandler.js";



const  handlegetanalytic= AsyncHandler (async (req,res)=>
{
    const {shorturl}= req.params
    console.log(shorturl);
    
    if(!shorturl || shorturl.length<4)
    {
        throw new ApiError(400, "Bad request, shorturl is missing or write complete short url ", 'please enter the full url with short id ')
    }

    const analysis =  await Url.findOne({shortid:shorturl})
    console.log(analysis?.visithistory?.length);
    if(!analysis)
    {
        throw new ApiError(404, "Not found  the shortid u given is not match in database", "please reenter the correct short id")
    }
    res.status(200).json([{ visitation_count: analysis.visithistory.length}, {Timeline: analysis.visithistory}])


    

})
export {handlegetanalytic}

