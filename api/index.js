'use strict';

require('dotenv').config()

const morgan = require('morgan')
const express = require('express')
const { log, error } = require('console')
const { json, urlencoded } = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

//routes imports
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const videoRoute = require('./routes/videoRoute')

//Bind with express pipeline
const app = express()

//DB config
const connectDB = require('./config/index')

//middlewares
app.use(cookieParser())
app.use(json())
app.use(urlencoded({extended: false}))
app.use(cors())
app.use(morgan('common'))


//routes use
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/videos', videoRoute)

const PORT = process.env.PORT

app.listen(PORT, (err) => {
    !err ? log(`Server started at port ${PORT}`) : error(err.msg);
})
