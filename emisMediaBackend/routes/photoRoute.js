const express = require('express')
const router = express.Router()
const db = require('../db')
const multer = require('multer')
const utils = require('../utils')
const upload = multer({dest:'uploads/'})

router.post('/student/:sid', upload.single('photo'),(request, response)=>{
    const {sid} = request.params
    const photoName = request.file.filename
    const query = `insert into student_photos values(${sid}, '${photoName}')`
    db.query(query, (error, photo)=>{
        response.send(utils.createResult(error, photo))
    })
})

router.delete('/student/:sid', (request, response)=>{
    const {sid} = request.params
    const query = `delete from student_photos where sid = ${sid}`
    db.query(query, (error, result)=>{
        response.send(utils.createResult(error, result))
    })
})

router.get('/student/:sid', (request, response)=>{
    const {sid} = request.params
    const query = `select photo from student_photos where sid = ${sid}`
    db.query(query, (error, result)=>{
        if (error)
            response.send({'status':'error', 'data':undefined})
        else
            response.send({'status':'success', 'data':result})
    })
})

module.exports = router