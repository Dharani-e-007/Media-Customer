
import Express from "express"
import CustomerRoutes from "./customer/index.js"
const Router = Express.Router()

Router.use("/", CustomerRoutes)
Router.get("/chat", (req, res) => {
    const username = makeid(7)
    res.render("chat", { name: username });
  });

  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default Router