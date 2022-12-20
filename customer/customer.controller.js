import Express from "express"
import {  listAllNews , getWeather} from "./customer.service.js";

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

