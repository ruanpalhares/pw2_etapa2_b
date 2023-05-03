var express = require('express')
var router = express.Router()
const path = require('path')
const basePath = path.join(__dirname,'../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res) =>{
    console.log(req.body)
    let name = req.body.name
    let age = req.body.age

    console.info(name)
    console.info(age)
})

router.get('/:id', (req, res) => {
    console.log(`Carregando usuario: ${req.params.id}`)

    res.sendFile(`${basePath}/user.html`)
})

module.exports = router