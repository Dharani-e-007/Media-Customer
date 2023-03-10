import Newsmodel from "./news.model.js"
import fetch from "node-fetch";
 const apikey = 'beaef0edb7ce1ed4e43ff06e0a34ce55' // my key
//   const apikey = '50a7aa80fa492fa92e874d23ad061374'
  let city = 'Chennai';

export let listAllNews = (data) => {
	return new Promise( (resolve, reject) => {
        var query = { }
        Newsmodel.find(query).then( (result) => {
           
            if (result) {
                resolve(result)
            }
        },  (error) => {
            reject()
        })

    })
}
export let getWeather = (data) => {
	return new Promise( (resolve, reject) => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey)
        .then(response => response.json())
        .then(data => {
         resolve(data)
        }).catch(err => 
            reject()
        );

    })
}
export let getSports = (data) => {
	return new Promise( (resolve, reject) => {
        fetch('https://app.sportdataapi.com/api/v1/soccer/leagues?apikey=5cee71d0-8049-11ed-bf9c-a3dd3a45a74b&country_id=48')
        .then(response => response.json())
        .then(data => {
         resolve(data)
        }).catch(err => 
            reject()
        );

    })
}
