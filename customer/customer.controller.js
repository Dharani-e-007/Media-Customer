import Express from "express"
import {  listAllNews } from "./customer.service.js";
import fetch from "node-fetch";
 // const apikey = 'beaef0edb7ce1ed4e43ff06e0a34ce55' // my key
  const apikey = '50a7aa80fa492fa92e874d23ad061374'
  let city = 'Chennai';
export const customer = (req,res)=>{ 
    listAllNews(req.body).then((result)=>{
       
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey)
            .then(response => response.json())
            .then(data => {
             console.log(data)
             res.render("allnews",{
                news:result ,
                weathermap:data

            })
            }).catch(err =>  res.status(500).send({
                error:"Internal Server Error - Wrong City name"
            })
            );
    },()=>{
        res.status(500).send({
            error:"Internal Server Error"
        })
    }) 
 }

 