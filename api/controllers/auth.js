const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const encryptedPassword = (password) => {
    const hashedpassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
    return hashedpassword;
}

//Register
const Register = async (req, res) => {
    const userExist = await User.findOne({email: req.body.email})
    if(!userExist){
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
        res.status(401).json('User already exist, pls sign in')
    }

}


const Login = async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(user){
        
        try {
            const validate = await bcrypt.compare(req.body.password, user.password)
            if(!validate){
                res.status(401).json('Invalid username or password')
            } else {
                const token = jwt.sign({
                    id: user._id
                },  process.env.JWT_KEY)

               const { password, ...info } = user._doc
                res.cookie('access_token', token, {
                    httpOnly: true
                }).json({...info})
              
            }
            
        } catch (error) {
            res.status(500).json(error.message)
        }
    } else {
        res.status(401).json('Invalid username or password')
    }

}

// const Goggle = async (req, res) => {
    
// }

module.exports = { Register, Login }