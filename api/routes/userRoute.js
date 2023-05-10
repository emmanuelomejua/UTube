const {Router} = require('express');
const { updateUser, delUser, getUser, subUser, unsubUser, likeVideo, unlikeVideo } = require('../controllers/user');
const { verifyToken } = require('../verify');
const router = Router()

router.put('/:id', verifyToken, updateUser)

router.delete('/:id', verifyToken, delUser)

router.get('/find/:id', getUser)

router.put('/sub/:id', verifyToken, subUser)

router.put('/sub/:id', verifyToken, unsubUser)

router.put('/like/:videoId', verifyToken, likeVideo)

router.put('/unlike/:videoId', verifyToken, unlikeVideo)

module.exports = router
