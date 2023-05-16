const express = require('express')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')

const app = express() //construtor de de pack

app.engine('handlebars', exphbs())
app.set('view engine','handlebars')
//Encode de json para express
app.use(express.urlencoded({extended: true,}),)
app.use(express.json())

app.post('/verifyUser', (req, res) =>{
    const form={
        name:req.body.name,
        surname:req.body.surname,
        age:req.body.age,
        approved:false
    }
    if(form.age>=32){
        form.approved=true
    }else{
        form.approved=false
    }
    res.status(201).render('home',{user:form})
})
app.get('/', function (req, res){
    res.status(200).render('home')
})
app.get('/dashboards', function(req, res){
    res.render('dashboards')
})

app.listen(3000)