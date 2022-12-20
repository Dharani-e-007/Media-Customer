import  BodyParser from "body-parser"
import Express from "express"
import "./mongoconnection.js"
 import Router from "./routes.js"
 import session from "express-session"
//  import socket from "socket.io"
 import { Server } from 'socket.io';
const  Port = process.env.PORT || 5000
let  app = Express()
app.set("view engine","ejs")
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(Express.static('public'))
app.use(Express.json());
app.use(session({ secret: "ChatV2", resave: false, saveUninitialized: true }));
const io = new Server(app.listen(Port));

io.on("connection", (socket) => {
    console.log(socket.id + " a user connected");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
    socket.on("chat", (data) => {
      io.sockets.emit("chat", data);
    });
  });

 app.use(Router)

// app.listen(Port,() => {
//     console.log("Server is listenig on" , Port)
// })



