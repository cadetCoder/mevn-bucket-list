const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { PORT, mongoURI } = require('./config')

mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.get('/', (req,res) => res.send(''))

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`))