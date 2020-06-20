// JavaScript source code
const express = require('express');


const jwt = require('jsonwebtoken');

var AuthenticateUsers = (req, res, next) => {
    var token = req.header('x-auth');
    try {
        console.log("da5a5aalapd");
        var decodedtoken = jwt.verify(token, 'secretkeyforuser')
        console.log(decodedtoken._id);
        var token = decodedtoken;
        req.userId = decodedtoken._id;
        req.usertype = "user"
        next();
    }
    catch (err) {
        res.status(401).send("Token is not valid");
    }
}

var AuthenticateFrontend = (req, res, next) => {
    console.log("2el body yaaaaaaaaaaaaaaa");
    console.log(req.body);
    var token = req.header('x-auth');
    try {
        console.log("da5a5aalapd");
        var decodedtoken = jwt.verify(token, 'secretkeyforfrontend')
        req.token = decodedtoken;
        req.usertype = "frontend"
        next();
    }
    catch (err) {
        res.status(401).send("Token is not valid");
    }
}
module.exports = {
    AuthenticateFrontend,
    AuthenticateUsers

}
