const db = require('../models');
const axios = require('axios');

module.exports = {
    getSuggestions: function (req, res) {
        console.log("req.params.data",req.params.data)
        var arrSplit = req.params.data.split(',');
        console.log("8", `https://api.asos.com/product/search/v1/?q=${arrSplit[0]}+${arrSplit[1]}+${arrSplit[3]}+${arrSplit[4]}&store=2&lang=en-US&sizeschema=US&currency=USD&sort=freshness&channel=mobile-app&offset=0&limit=12&currentprice:10<${arrSplit[2]}|refine=base_colour:${arrSplit[5]},${arrSplit[6]}`);
        axios.get(`https://api.asos.com/product/search/v1/?q=${arrSplit[0]}+${arrSplit[1]}+${arrSplit[3]}+${arrSplit[4]}&store=2&lang=en-US&sizeschema=US&currency=USD&sort=freshness&channel=mobile-app&offset=0&limit=12&currentprice:10<${arrSplit[2]}|refine=base_colour:${arrSplit[5]},${arrSplit[6]}`)
        .then(response=>{
            console.log(response.data.products)
            res.json(response.data.products);
        })
        .catch(err=> console.log("err", err))
    }
};
