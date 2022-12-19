import Newsmodel from "./news.model.js"


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