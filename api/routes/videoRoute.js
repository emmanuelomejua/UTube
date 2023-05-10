const {Router} = require('express');
const { createVideo, updateVideo, delVideo, getVideo, addView, trendingVideos, randomVideo, SubscribedChannels, getByTags, getBySearch } = require('../controllers/video');
const { verifyToken } = require('../verify');
const router = Router()


router.post('/', verifyToken, createVideo)

router.put('/:id', verifyToken, updateVideo)

router.delete('/:id', verifyToken, delVideo)

router.get('/find/:id', getVideo)

router.put('/view/:id', verifyToken, addView)

router.get('/trend', trendingVideos)

router.get('/random', randomVideo)

router.get('/sub', verifyToken, SubscribedChannels)

router.get('/tags', getByTags)

router.get('/search' ,getBySearch)

module.exports = router
