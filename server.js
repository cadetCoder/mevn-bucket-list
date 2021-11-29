const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const { PORT, mongoURI } = require('./config')

app.get('/', (req,res) => res.send(''))

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`))