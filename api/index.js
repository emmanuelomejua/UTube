require('dotenv').config()

const morgan = require('morgan')
const express = require('express')
const { log, error } = require('console')
const { json, urlencoded } = require('express')
const cors = require('cors')

const app = express()

const connectDB = require('./config/index')

app.use(json())
app.use(urlencoded({extended: false}))
app.use(cors())
app.use(morgan('common'))


const PORT = process.env.PORT

app.listen(PORT, (err) => {
    !err ? log(`Server started at port ${PORT}`) : error(err.msg);
})