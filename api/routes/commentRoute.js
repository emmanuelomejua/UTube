const {Router} = require('express');
const { addComment, delComment, getComment } = require('../controllers/comment');
const { verifyToken } = require('../verify');
const router = Router()

router.post('/', verifyToken, addComment)

router.delete('/:id', verifyToken, delComment)

router.get('/:videoId', getComment)

module.exports = router
