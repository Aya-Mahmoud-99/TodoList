
var { mongoose } = require("./db/mongoose.js");
var{User}= require("./models/users.js");   //users model














//CREATING NEW USER INSTANCES AND SAVING THEM
var user1 = new User({
        "userName" : "AyaElewa",
        "email" : "aya_1999_mahmoud@hotmail.com",
        "password" : "$2b$10$JUH0ZS6j9wuhkTqEqos/zOjhBfVuurWwmSgPmnJRUp35jz844VY12"
                   
})

//SAVING AND RETURNING ID OF THE NEW USER
user1.save().then((res)=>{
    console.log(res._id);
},(err)=>{
    console.log(err);
});
//
var user2 = new User({
    "userName": "AyaAbdelfatah",
    "email": "ayamahmoudabdelfatah99@gmail.com",
    "password": "$2b$10$PqQUL3rwvSBtlIezobdyJuvt68HVRWzSY/kbR8Yf0HsIcX1WQJHmu"
});


user2.save().then((res)=>{
    console.log(res._id);
},(err)=>{
    console.log(err);
});



