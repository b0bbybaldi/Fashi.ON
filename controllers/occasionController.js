const db = require('../models');
const request = require('request');
const axios = require('axios');

module.exports = {

    findById: function(req, res){
        console.log("findById");
        db.Occasion
        .findById(req.params.id)
        .then(dbModel => {
            console.log(dbModel);
            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    },
    create: function(req,res){
        console.log("create");
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