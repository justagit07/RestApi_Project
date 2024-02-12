import express from "express"
import { urllogic } from "../controller/urlcontroller.js";
import { redirectuser } from "../controller/redirect.controller.js";
import {handlegetanalytic} from "../controller/analytic.controller.js"
import { serversr } from "../controller/ssr.controller.js";
import {statichandler} from "../controller/static.controller.js";

const router= express.Router();

router.get("/r", (statichandler))
router.route("/url").post( urllogic)
router.route("/url/analytics/:shorturl").post(handlegetanalytic)
router.route("/:id(\\b[a-zA-Z0-9]{4}\\b)").get(redirectuser)

router.get("/test/ssr", (serversr))
export default router