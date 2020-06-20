// JavaScript source code
var { Todo } = require("../models/todos.js");   //users model
var addTodo = function (userId, text) {
    var todo = new Todo({
        "userId": userId,
        "text": text
    })
    return todo.save(() => {
        Promise.resolve(todo);
    }).catch(() => {
        Promise.reject();

    })
}
var getTodos = function (userId) {
    return Todo.find({ "userId": userId }).then((todos) => {
        console.log(todos);
        return Promise.resolve(todos.map(todo=>todo.text))
    }).catch((err) => {
        return Promise.reject(err)
    })
}
module.exports = {
    addTodo,
    getTodos

}

