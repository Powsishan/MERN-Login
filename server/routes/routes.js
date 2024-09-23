const express = require('express')
const router = express.Router();
const{registerUser,userLogin} = require('../controller/userController');

const {authenticate} = require('../middleware/authorization')

//register user 
router.post('/register', registerUser);

//login
router.post('/login', userLogin);


module.exports = router; 