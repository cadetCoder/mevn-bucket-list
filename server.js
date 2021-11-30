const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { PORT, mongoUri } = require('./config')
const cors = require('cors')
const morgan = require('morgan')
bodyParser = require('body-parser')

app.use(cors())
app.use(morgan('tiny'))

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