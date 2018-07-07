const db = require('../models');

module.exports = {
    create: function (req, res, next) {
        passport.authenticate("local-signup", (err, user, info) => {
            if (err) {
                console.log(err)
                return next(err);
            }
    
            if (!user) {
                console.log("not a user")
                return res.redirect("/");
            }
    
            req.login(user, (err) => {
                if (err) {
                    console.log("auth error")
                    return next(err);
                } else {
                    res.cookie("firstName", req.user.firstName);
                    res.cookie("lastName", req.user.lastName);
                    res.cookie("email", req.body.email);
                    res.cookie("gender", req.user.gender);
                    res.cookie("user_id", req.user.id);
                    console.log("confirm")
                    return res.redirect("/");
                }
    
            })
        })(req, res, next);
    }
};