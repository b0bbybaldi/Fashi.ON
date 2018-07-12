const db = require('../models');
const axios = require('axios');

module.exports = {
    getSuggestions: function (req, res) {
        console.log(req.params.data.budget);
        // const searchTerm = Object.keys(req.params.data).reduce(function(a,k){a.push(k+'='+encodeURIComponent(req.params.data[k]));return a},[]).join('&');
        axios.get(`https://api.asos.com/product/search/v1/?q=${req.params.data}&store=2&lang=en-US&sizeschema=US&currency=USD&sort=freshness&channel=mobile-app&offset=0&limit=12&currentprice:${req.params.data.budget}`)
        .then(response=>{
            console.log(response.data.products)
            res.json(response.data.products);
        })
        .catch(err=> console.log("err", err))
    }
    
};