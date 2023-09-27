const { Router } = require('express')
const router = Router()

const { Login, Register, GoggleLogin } = require('../controllers/auth')

router.post('/register', Register);

router.post('/login', Login);

router.post('/google', GoggleLogin)

module.exports = router
