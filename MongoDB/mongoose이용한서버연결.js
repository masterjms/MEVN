const mongoose = require('mongoose')
const USER = 'minsung'
const PWD = 'minsung1234'
const HOST = 'localhost:1'
const DB = 'sensor'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
mongoose.set('useFindAndModify', false)
mongoose.connect(mongodbURL, {useNewUrlParser: ture})
.then(() => console.log('connection success'))
.catch((err) => console.error(err))
const Photo = require('./models/photo.js') 