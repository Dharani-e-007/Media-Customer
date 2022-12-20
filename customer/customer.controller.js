import Express from "express"
import {  listAllNews , getWeather , getSports} from "./customer.service.js";

export const customer = (req,res)=>{ 
    listAllNews(req.body).then((result)=>{
       getWeather().then((data)=>{
          res.render("allnews",{
                  news:result ,
                 weathermap:data
                 })
        },()=>{
        res.status(500).send({
            error:"Internal Server Error"
        })
    }) 
    },()=>{
        res.status(500).send({
            error:"Internal Server Error"
        })
    }) 
 }

 export const chat = (req,res)=>{
    const username = makeid(7)
    res.render("chat", { name: username });
  }

   const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
 export const sports = (req,res)=>{ 
   
       getSports().then((data)=>{
   
          res.render("sports",{
                  sports:data.data
                 })
        },()=>{
        res.status(500).send({
            error:"Internal Server Error"
        })
    }) 
   
 }
