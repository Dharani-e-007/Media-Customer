
import Express from "express"
import CustomerRoutes from "./customer/index.js"
const Router = Express.Router()

Router.use("/", CustomerRoutes)




export default Router