
import  {Url} from "../model/urlSchema.js"


const redirectuser= async (req,res)=>
{

    const {id} = req.params
    const entry=  await  Url.findOneAndUpdate({shortid:id}, {$push:{visithistory:{timestamp: Date.now()}}})
    try
    {
        const ress= entry.originalurl
        res.redirect(`https://${ress}`)

    }
    catch(err)
    {
        console.log('err yehi a');
        res.send(err)
    }
}

export {redirectuser}