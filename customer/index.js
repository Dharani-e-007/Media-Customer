import Express from "express"
import {customer , sports , chat} from "./customer.controller.js"

const Router = Express.Router()

Router.get("/"   ,  customer )
Router.get("/chat"   ,  chat )
Router.get("/sports"   ,  sports )

export default Router