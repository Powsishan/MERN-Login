const { User, validateLogin, validateRegistration } = require('../models/userModels')
const bcrypt = require('bcrypt')
const joi = require('joi')
const mongoose = require('mongoose')


const registerUser = async (req, res) => {
    try {
        const { error } = validateRegistration(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }

        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).send({ message: "User Already exists" });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const saveUser = await new User({ ...req.body, password: hashPassword }).save();

        // Use `res` instead of `req` for sending response
        res.status(201).send({
            message: "User created successfully", user: saveUser
        });

    } catch (error) {
        // Log the actual error in console
        console.error('Error during user registration:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
}



const userLogin = async (req, res) => {

    try {
        const { error } = validateLogin(req.body)
        if (error)
            return res.status(400).send({ message: error.details[0].message })

        const user = await User.findOne({ email: req.body.email })
        if (!user)
            return res.status(401).send({ message: 'Invalid Email or Password' })

        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        )
        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" })

        const token = user.generateAuthToken()
        
        res.status(200).send({ data: token, message: "Logged in successfully" })
    } catch(error) {

        res.status(500).send({ message: "Internal Server Error" +error })

    }


}


module.exports = {
    registerUser,
    userLogin
}