var express = require('express');
var mongoose = require ('mongoose');
var User = require('./model');
var router = express.Router();

router.ajoutUser= function(req, res) {
    User.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password
    }.then(result => {
        res.send("Tout c'est bien passé");
    }).catch(err =>
    {
        res.status(500).send('Il y a eu un soucis!')

    })
        )
};
module.exports = router;