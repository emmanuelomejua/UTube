const User = require('../model/User');
const Videos = require('../model/Video')
const bcrypt = require('bcrypt')

//update
const updateUser = async (req, res) => {
    if(req.params.id === req.user.id) {
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body,password = await bcrypt.hash(req.body.password, salt)
            res.status(200).json('Password successfully updated')
        } else {
            try {
                const updated = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
                res.status(200).json(updated)
            } catch (error) {
                return res.status(500).json(error)
            }
        }
    
    } else {
        res.status(403).json('You are not allowed to do this!')
    }
}

//delete user
const delUser = async (req, res) => {
   if(req.params.id === req.user.id){
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user deleted succesfull')
    } catch (error) {
        return res.status(500).json(error)
    }
   } else {
    res.status(401).json('You are not allowed to do this!')
   }
}

//get user
const getUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//subscribe to a user
const subUser = async (req, res) => {
    try {
        const subscribe = await User.findByIdAndUpdate(req.user.id, {
            $push: {subUsers: req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: 1 }
        })

        res.status(200).json('Subscribed to user')
    } catch (error) {
        return res.status(500).json(error)
    }
}

//unsubscribe to a user
const unsubUser = async (req, res) => {
    try {
        const subscribe = await User.findById(req.user.id, {
            $pull: {subUsers: req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: -1 }
        })

        res.status(200).json('UnSubscribed from channel')
    } catch (error) {
        return res.status(500).json(error)
    }
}

//like a video
const likeVideo = async (req, res) => {
    const id = req.user.id;
    const videoId = req.params.videoId;

    try {
        await Videos.findByIdAndUpdate(videoId, {
            $addToSet: {likes: id},
            $pull: {dislikes: id}
        })
        res.status(200).json('Liked')
    } catch (error) {
        return res.status(500).json(error)
    }
}

//unlike a video
const unlikeVideo = async (req, res) => {
    const id = req.user.id;
    const videoId = req.params.videoId;

    try {
        await Videos.findByIdAndUpdate(videoId, {
            $addToSet: {dislikes: id},
            $pull: {likes: id}
        })
        res.status(200).json('Disliked')
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { updateUser, delUser, getUser, subUser, unsubUser, likeVideo, unlikeVideo  }
