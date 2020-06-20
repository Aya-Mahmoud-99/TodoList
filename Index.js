// JavaScript source code

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/users');





const usersRoutes = require('./Controllers/UserController');

const todosRoutes = require('./Controllers/TodoController');


const app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());



app.use("/", usersRoutes);
app.use("/", todosRoutes);




app.listen(8000,()=>{
    console.log("Started on port 8000");
});

module.exports=app