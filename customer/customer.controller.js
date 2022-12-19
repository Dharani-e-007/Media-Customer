import Express from "express"
import {  listAllNews } from "./customer.service.js";

export const customer = (req,res)=>{ 
    listAllNews(req.body).then((result)=>{
       
		res.render("allnews",{
		news:result 
    })
    },()=>{
        res.status(500).send({
            error:"Internal Server Error"
        })
    }) 
 }

 