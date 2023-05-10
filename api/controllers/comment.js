const Videos = require('../model/Video')
const Comment = require('../model/Comment')


const addComment = async (req, res) => {
    const comment = new Comment({...req.body, userId: req.user.id})
    try {
        const savedComment = await comment.save()
        res.status(200).send(savedComment)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const delComment = async (req, res) => {
   try {
        const comment = await Comment.findById(req.params.id)
        const video = await Videos.findById(req.params.id)

        if(req.user.id === comment.userId || req.user.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id)

            res.status(200).send('Comment deleted')
        } else {
            return res.status(401).send('You cannot delete this comment')
        }
   } catch (error) {
    return res.status(500).json(error)
   }
}

const getComment = async (req, res) => {
    try {
        const comments = await Comment.find({videoId: req.params.videoId})
        res.status(200).json(comments)
    } catch (error) {
     return res.status(500).json(error)
    }
}

module.exports = { addComment, delComment, getComment  }
