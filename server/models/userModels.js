const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');

const userSchema = new mongoose.Schema({

    firstName: {type:String, require:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true, unique:true},
    password:{type:String, require:true}

});


//  generate auth token for the user
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id }, 
        process.env.JWTPRIVATEKEY, 
        { expiresIn: "7d" }
    );
    return token;
};


const User = mongoose.model("User", userSchema)


//validation for registration 
const validateRegistration = (data) =>{

    const schema = joi.object({
        firstName: joi.string().required().label("First Name"),
        lastName: joi.string().required().label("Last Name"),
        email:joi.string().email().required().label("Email"),
        password: joi.string().required().label("Password")
    });

    return schema.validate(data);

};






const validateLogin =(data) =>{

    const schema = joi.object({
        email:joi.string().email().required().label("Email"),
        password:joi.string().required().label('Password')
    });

    return schema.validate(data);

};

module.exports = {
    User,
    validateRegistration,
    validateLogin
};
