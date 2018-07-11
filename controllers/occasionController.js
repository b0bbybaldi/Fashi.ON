const db = require('../models');
const request = require('request');
const axios = require('axios');

module.exports = {

    getSuggestions: function (req, res) {
        const searchTerm = req.params.data;
        console.log(searchTerm)
        axios.get(`https://api.asos.com/product/search/v1/?q=${searchTerm}&store=2&lang=en-US&sizeschema=US&currency=USD&sort=freshness&channel=mobile-app&offset=0&limit=10`)
        .then(response=>{
            console.log(response.data.products)
        })
        .catch(err=> console.log("err", err))
        // function(err, response, body){
        //     // body = JSON.parse(body);
        //     console.log("response", response);
        //     console.log("body", body);
        //     // res.json(body)
        // })
    },
    findById: function(req, res){
        db.Occasion
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req,res){
    
        db.Occasion.create(req.body).then(function(dbOccasion) {
            
            return db.User.findOneAndUpdate(
                {email: req.body.email},
                {$push: {occasions: dbOccasion._id} }, 
                {new: true});
        })
        .then(function(dbUser) {

            res.json(dbUser);
        })
        .catch(err => res.status(422).json(err));
    },
    // create: function(req,res){
    //     console.log(req.body);
    //     db.Occasion
    //     .create(req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    update: function(req,res){
        db.Occasion
        .findOneAndUpdate({ _id: req.params.id } ,req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req,res){
        db.Occasion
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};