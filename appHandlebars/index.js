const express = require('express')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')

const app = express() //construtor de de pack

app.engine('handlebars', exphbs())
app.set('view engine','handlebars')

app.get('/', function (req, res){
    const user ={
        name:"Victor Hugo",
        surname:"Icoma",
        age:"41"
    }
    res.render('home',{user:user})
})

app.listen(3000)