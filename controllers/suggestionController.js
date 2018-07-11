const db = require('../models');
const request = require('request');
const axios = require('axios');

module.exports = {

    getSuggestions: function (req, res) {
        console.log("reqqqqqqq");
        console.log("req.paramsssssss" ,req.params);
        // console.log("req.params.dataaaaaa",req.params.data);
        // const searchTerm = req.params.data;
        // console.log(searchTerm)
        // axios.get(`https://api.asos.com/product/search/v1/?q=${searchTerm}&store=2&lang=en-US&sizeschema=US&currency=USD&sort=freshness&channel=mobile-app&offset=0&limit=12`)
        // .then(response=>{
        //     console.log(response.data.products)
        //     // response = JSON.parse(response);
        //     res.json(response.data.products);
        // })
        // .catch(err=> console.log("err", err))
        // function(err, response, body){
        //     console.log("response", response);
        //     console.log("body", body);
            
        // })
    }
    
};