const mongoose = require("mongoose");
//tell mongoose which promise libray we want to use
//mongoose.Promise = global.Promise;
//connect to the database
//the connect method here doesnot need a call back fn the library here is more complex it will wait for the connection to happen first to avoid any errors
mongoose.connect( 'mongodb://localhost:27017/todoList');

module.exports = { mongoose };