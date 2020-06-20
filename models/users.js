const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var password = "abc";
const validator= require ('validator');

var UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true

    },

    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
		validate:{
			validator: validator.isEmail,
			message: '{value} is not a valid email'
		}
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
    }


});


UserSchema.statics.findByCredentials = function (email, password) {
    console.log("2elgedeed");
    var User = this;
    console.log("2elgedeed2");
    return User.findOne({ email }).then((user) => {
        console.log(user);
        if (!user) {
            console.log("not user");
            return Promise.reject();

        }
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    console.log("feh3ade");
                    resolve(user);
                } else {
                    console.log("Passwordincorrect");
                    reject();
                }
            });
        })
    });

};

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    //console.log('hena');
    var token = jwt.sign({ _id: user._id.toHexString(), access }, 'secretkeyforuser').toString();
    //console.log('henahena');
    return new Promise((resolve, reject) => {
        //console.log('henahenahena');
        resolve(token);

    });
}

UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;

    try {
        decoded = jwt.verify(token , 'secretkeyforuser');
    } catch (e) {
       return Promise.reject();
    }
    return User.findOne({
     _id:decoded._id
    });

};








var User = mongoose.model('Users', UserSchema);



module.exports = {
    User
};
