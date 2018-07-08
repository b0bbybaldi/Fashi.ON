const db = require('../models');
const request = require('request');

module.exports = {
    // getSuggestions: function (req, res) {
    //     request.get("https://api.asos.com/product/search/v1/?q=jeans&store=2&lang=en-US&sizeschema=US&currency=USD&sort=relevancy&channel=mobile-app&offset=0&limit=10",
    //     function(err, response, body){
    //         body = JSON.parse(body);
    //         console.log(body.searchTerm);
    //         res.json(body.searchTerm);
    //     })
    // },
    findById: function(req, res){
        db.Occasion
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req,res){
        console.log("11", req.body);
        db.Occasion.create(req.body).then(function(dbOccasion) {

            return db.User.findOneAndUpdate({email: req.body.email}, {$push: {occasion: dbOccasion._id} }, {new: true});
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