const Video = require('../model/Video')
const User = require('../model/User')

//createVideo
const createVideo = async (req, res) => {
    const video = new Video({userId: req.user.id, ...req.body})

    try {
        const savedVideo = await video.save()
        res.status(201).json(savedVideo)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//update
const updateVideo = async (req, res) => {
   try {
    const video = await Video.findById(req.params.id)

   if(req.user.id === video.userId){
        const updated = await Video.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updated)
   } else {
        return res.status(401).json('You can only edit your video')
   }
   } catch (error) {
    return res.status(500).json(error)
   }
}

//delete
const delVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id)
        if(req.user.id === video.userId){
            const del = await Video.findByIdAndDelete(req.params.id)
            res.status(200).json('Video deleted successfully')
        } else {
            return res.status(401).json('You can only delete your video')
        }
    } catch (error) {
         return res.status(500).json(error)
    }
}

//get
const getVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json(video)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const addView = async (req, res) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: {views: 1}
        })
        res.status(200).json('Viewig this video')
    } catch (error) {
        return res.status(500).json(error)
    }
}

const randomVideo = async (req, res) => {
    try {
        const videos = await Video.aggregate([
            {$sample: { size: 10}}
        ])
        res.status(200).json(videos)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const trendingVideos = async (req, res) => {
    try {
        const videos = await Video.find.sort({views: -1}).limit(10)
        res.status(200).json(videos)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const SubscribedChannels = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        const subChannels = user.subUsers

        const list = await Promise.all(subChannels.map((channelId) => {
            return Video.find({ userId: channelId})
        }))
        res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt))
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getByTags = async (req, res) => {
    const tags = req.query.tags.split(',')
    try {
        const videos = await Video.find({tags : {$in : tags}}).limit(12)
        res.status(200).json(videos)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getBySearch = async (req, res) => {
    const query = req.query.q
    try {
        const videos = await Video.find({ title: { $regex: query, $options: 'i' } }).limit(20)
        res.status(200).json(videos)
    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports = { createVideo, updateVideo, delVideo, getVideo, addView, randomVideo, trendingVideos, SubscribedChannels, getByTags, getBySearch }
