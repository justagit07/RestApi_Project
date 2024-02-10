import express from "express"
import { urllogic } from "../controller/urlcontroller.js";
import { redirectuser } from "../controller/redirect.controller.js";
import {handlegetanalytic} from "../controller/analytic.controller.js"

const router= express.Router();


router.route("/url").post( urllogic)
router.route("/url/analytics/:shorturl").post(handlegetanalytic)
router.route("/:id").get(redirectuser)
export default router