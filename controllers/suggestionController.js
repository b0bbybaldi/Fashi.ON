const db = require('../models');
const request = require('request');
const axios = require('axios');

module.exports = {

    getSuggestions: function (req, res) {
        console.log("reqqqqqqq");
        console.log("req.paramsssssss" ,req.params);
        console.log("****req.params.dataaaaaa****",req.params.data);
        // const searchTerm = Object.keys(req.params.data).reduce(function(a,k){a.push(k+'='+encodeURIComponent(req.params.data[k]));return a},[]).join('&');
        axios.get(`https://api.asos.com/product/search/v1/?q=${req.params.data}&store=2&lang=en-US&sizeschema=US&currency=USD&sort=freshness&channel=mobile-app&offset=0&limit=12`)
        .then(response=>{
            console.log(response.data.products)
            // response = JSON.parse(response);
            res.json(response.data.products);
        })
        .catch(err=> console.log("err", err))
    }
    
};