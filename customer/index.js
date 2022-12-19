import Express from "express"
import {customer} from "./customer.controller.js"

const Router = Express.Router()

Router.get("/"   ,  customer )

export default Router