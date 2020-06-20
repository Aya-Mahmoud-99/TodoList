

// JavaScript source code
var { mongoose } = require("./../db/mongoose.js");
var { User } = require("./../models/users.js");

const {ObjectID}=require("mongodb");
const express = require('express');
const router = express.Router();
var _ = require('lodash');
const jwt = require('jsonwebtoken');

var AuthenticationServices = require("./../Services/AuthenticationService");






//EDIT USER PROFILE PICTURE REQUEST

router.post('/users/login', AuthenticationServices.AuthenticateFrontend, async (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    console.log("2el body yaaaaaaaaaaaaaaa");
    console.log(req.body);
    User.findByCredentials(body.email, body.password).then((user) => {


            return user.generateAuthToken().then((token) => {
                var decodedtoken = jwt.verify(token, 'secretkeyforuser')

                console.log(decodedtoken._id);
                res.header("Access-Control-Allow-Headers", "x-auth");
                res.header("Access-Control-Expose-Headers", "x-auth");
                console.log("login 2el gededa");
                res.header('x-auth', token).send();
                console.log(5);
            });

    }).catch((e) => {
        console.log(e)
        res.status(401).send("Either email or passwrod is incorrect");
    });
});






 //if(!module.parent){
    //  app.listen(3000,()=>{
    //      console.log("Started on port 3000");
    //  });
 //}

 module.exports = router ;
