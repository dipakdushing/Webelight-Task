
const User = require("../models/user_model");
var jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (user)=>{
    return jwt.sign({user}, process.env.SECRET_KEY);
}

const register = async(req, res)=>{
    try {
        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).send({message:"email already exist"});
        }
        user = await User.create(req.body)
        const token = generateToken(user);
        return res.status(200).send({user,token});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
}

const login = async(req, res)=>{
    try {
        let user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).send({message:"email is Incorrect"});
        }
        let usrPassword = user.checkPassword(req.body.password);
        if(!usrPassword){
            return res.status(400).send({message:"password Incorrect"});
        }
        const token = generateToken(user)
        return res.status(200).send({user, token});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
}

module.exports = {login, register};