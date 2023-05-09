'use strict';

const mongoose = require("mongoose");

const { connect, on, set } = mongoose
const { log, error } = require('console')

set('strictQuery', true)

connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>log('DB connection successful'))
.catch((err)=>error(err.message))