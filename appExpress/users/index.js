var express = require('express')
var router = express.Router()
const path = require('path')
const fs = require('fs')
const basePath = path.join(__dirname,'../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res) =>{
    console.log(req.body)
    let name = req.body.name
    let age = req.body.age

    if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts')
    }

    if (fs.existsSync(`accounts/${name}.json`)) {
        res.status(409).sendFile(`${basePath}/erro.html`)
        return
    }

    fs.writeFileSync(
        `accounts/${name}.json`,
        `{"nome":"${name}","age":${age}}`,
        function (err) {
            console.error(err)
        }
    )

    console.info(name)
    console.info(age)
    res.status(201).sendFile(`${basePath}/userForm.html`)
})

router.get('/:id', (req, res) => {
    console.log(`Carregando usuario: ${req.params.id}`)

    res.sendFile(`${basePath}/user.html`)
})

module.exports = router