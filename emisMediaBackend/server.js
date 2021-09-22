const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const pool = require('./db')

const app = express()
app.use(cors('*'))
app.use(bodyParser.json())

const routerPhoto = require('./routes/photoRoute')

app.use('/photo', routerPhoto)

app.use(express.static('uploads'))
app.listen(4005, '0.0.0.0', ()=>{
    console.log('media server started on port 4005')
})