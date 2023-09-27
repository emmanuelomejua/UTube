'use strict';

const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const encryptedPassword = (password) => {
    const hashedpassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
    return hashedpassword;
}

//Register
const Register = async (req, res) => {
    const isExist = await User.findOne({email: req.body.email})
    if(!isExist){
        const { name, email, password } = req.body
        try {
            const user = await User.create({
                name,
                email,
                password: encryptedPassword(password)
            })
            const newUser = await user.save()
           
            res.status(201).json(newUser)
        } catch (error) {
            res.status(500).json(error.message)
        }
    } else {
        res.status(400).json('User already exist, pls sign in')
    }

}


//login method
const Login = async (req, res) => {

    const user = await User.findOne({email: req.body.email})

    try {
       
        if(!user){
            res.status(400).json('Invalid credentials')
        } else {
            const vPassword = await bcrypt.compare(req.body.password, user.password)
            if(vPassword){
                const token = jwt.sign({
                    id: user._id
                }, process.env.JWT_KEY)

                const {password, ...info} = user._doc

                res.cookie('access_token', token, {
                    httpOnly: true
                }).json({...info})
               
            } else {
                res.status(400).json('Invalid email or password')
            }
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}




const GoggleLogin = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})

        if(user){
            const token = jwt.sign({
                id: user._id
            }, process.env.JWT_KEY)

            res.cookie('access_token', token, {
                httpOnly: true
            }).json(user._doc)
        } else {
            res.status(400).json('Invalid email or password')
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { Register, Login, GoggleLogin }
