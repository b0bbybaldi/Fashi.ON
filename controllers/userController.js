const db = require('../models');


module.exports = {
    findById:  passport.authenticate("local", function(req, res){
        db.User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }),
    create: passport.authenticate ("local", function(req,res) {
        db.User
        .create({
            email: req.body.email,
            password: req.body.password
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }),
    update: function(req,res){
        db.User
        .findOneAndUpdate({ _id: req.params.id } ,req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};

// if (req.user){
//     req.session.destroy(function (err) {
//         req.logout();
//         res.redirect("/");
//     })
// } else
// res.redirect("/login")
