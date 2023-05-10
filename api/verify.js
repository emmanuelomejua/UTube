const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    if(!token) {
        return res.status(401).json('Requires authrntication')
    } else {
        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if(err){
                return res.status(403).json('Token is not valid')
            } else {
                req.user = user;
                next()
            }
        })
    }
}

module.exports = { verifyToken }
