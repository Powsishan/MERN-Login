const jwt = require('jsonwebtoken')
const {User} = require('../models/userModels')


const authenticate = async(req,res,next)=>{


    const token = req.headers('Authorization')?.replace('Bearer','');
    if(!token){
        return res.status(401).send('Access Denied. No token provided');
    }

    try{
        const decoded = jwt.verify(token,process.env.JWTPRIVATEKEY);
        req.user = await User.findById(decoded._id);
        next();
    }catch{

        console.error("JWT verfication error:",error);
        return res.status(400).send('Invalid token');
    }



    

}


module.exports = {
    authenticate
}