import  {Url} from "../model/urlSchema.js"
import {ApiError} from "../utility/ApiError.js"
import {AsyncHandler} from "../utility/AsyncHandler.js"
const serversr = AsyncHandler(async function(req, res){

    { 
        const  xe = await Url.find({})
        if(!xe)
        {
            throw new ApiError(502, "server is not responding to find the all url")
        }
          console.log('this is woirk');
          
        res.render('main', {urls: xe})


        


    }
})

export {serversr}