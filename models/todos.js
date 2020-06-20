const mongoose = require("mongoose");


var TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true

    },
    userId: {
        type: String,
        required: true,
        trim: true
    }


});











var Todo = mongoose.model('Todo', TodoSchema);



module.exports = {
    Todo
};
