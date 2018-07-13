const db = require('../models');
const axios = require('axios');

module.exports = {
    getSuggestions: function (req, res) {
        console.log("req.params.data",req.params.data)
        var arrSplit = req.params.data.split(',');
        var query = "";

        if(arrSplit[4] === "Male") {
            arrSplit[4] = "1000";
        } else if(arrSplit === "Female"){
            arrSplit[4] = "1001";
        } else {
            arrSplit[4] = "1000,1001";
        }
        if(arrSplit[6]) {
            query = `https://api.asos.com/product/search/v1/?q=${arrSplit[0]}+${arrSplit[1]}+${arrSplit[3]}&store=2&lang=en-US&sizeschema=US&currency=USD&sort=freshness&channel=mobile-app&offset=0&limit=12&currentprice:10<${arrSplit[2]}|refine=floor:${arrSplit[4]}|base_colour:${arrSplit[5]},${arrSplit[6]}`;
        } else {
            query = `https://api.asos.com/product/search/v1/?q=${arrSplit[0]}+${arrSplit[1]}+${arrSplit[3]}&store=2&lang=en-US&sizeschema=US&currency=USD&sort=freshness&channel=mobile-app&offset=0&limit=12&currentprice:10<${arrSplit[2]}|refine=floor:${arrSplit[4]}|base_colour:${arrSplit[5]}`;
        }
        console.log("query", query);
        axios.get(query)
        .then(response=>{
            // console.log(response.data.products)
            res.json(response.data.products);
        })
        .catch(err=> console.log("err", err))
    }
};
