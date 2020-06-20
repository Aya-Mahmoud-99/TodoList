

// JavaScript source code
var { mongoose } = require("./../db/mongoose.js");
var services = require("./../Services/todoServices");
const express = require('express');
const router = express.Router();

var AuthenticationServices = require("./../Services/AuthenticationService");






//EDIT USER PROFILE PICTURE REQUEST

router.post('/todos/addTodo', AuthenticationServices.AuthenticateUsers, async (req, res) => {
    services.addTodo(req.userId, req.body.text).then((todo) => {
        res.status(200).send(todo);

    }).catch((err) => {
        res.status(400).send("can't be added");
    })
});
router.get('/todos/getTodos', AuthenticationServices.AuthenticateUsers, async (req, res) => {
    services.getTodos(req.userId).then((todos) => {
        console.log(todos);
        res.status(200).send(todos);

    }).catch((err) => {
        res.status(400).send("can't find");
    })
});

 module.exports = router ;
