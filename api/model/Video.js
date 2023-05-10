const mongoose = require('mongoose')
const { model, Schema } = mongoose

const videoSchema = new Schema({
    userId: {
        type: String,
        required: true 
    },
    title: {
        type: String,
        required: true 
    },
    desc: {
        type: String,
    },
    imgUrl: {
        type: String,
        required: true 
    },
    videoUrl: {
        type: String,
        required: true 
    },
    views: {
      type: Number,
      default: 0
    }, 
    tags: {
        type: [String],
        default: []
    },
    likes:{
        type: [String],
        default: []
    },
    dislikes:{
        type: [String],
        default: []
    }
}, {timestamps: true})

const Videos = model('Videos', videoSchema)
module.exports = Videos
