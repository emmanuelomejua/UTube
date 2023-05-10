const mongoose = require('mongoose')
const { model, Schema } = mongoose

const commentSchema = new Schema({
    userId: {
        type: String,
        required: true 
    },
    videoId: {
        type: String,
        required: true 
    }, 
    desc: {
        type: String,
        required: true 
    }
}, {timestamps: true})

const Comment = model('Videos', commentSchema)
module.exports = Comment
