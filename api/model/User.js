const mongoose = require('mongoose');
const { model, Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: [4, 'Email must be at least 4 characters'],
        max: [25, 'Email should not exceed 25 characters']
    },
    password: {
        type: String,
        min: [4, 'Password must be at least 4 characters'],
        max: [25, 'Password should not exceed 25 characters']
    },
    img: {
        type: String,
    },
    subscribers: {
        type: Number,
        default: 0
    }, 
    subUsers: {
        type: [String]
    },
    fromGoogle: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Users = model('Users', userSchema)

module.exports = Users
