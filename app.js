import  BodyParser from "body-parser"
import Express from "express"
import "./mongoconnection.js"
// import Router from "./routes.js"


const  Port = process.env.PORT || 5000
let  app = Express()
app.set("view engine","ejs")
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))


// app.use(Router)

app.listen(Port,() => {
    console.log("Server is listenig on" , Port)
})



