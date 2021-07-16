//Carregando módulos
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const album = require('./controller/AlbumController')
const categoria = require('./controller/CategoriaController')

//Configurações
    //Express
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    //Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/albummanager', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log('Banco de dados conectado.')
    }).catch((err) => {
        console.log('Houve um erro ao conectar com o banco: ' + err)
    })

//Rotas
app.use('/album', album)
app.use('/categoria', categoria)

app.get('/', (req, res) => {
    res.redirect('/album')
})

//Outros
const porta = 5664
app.listen(porta, () => {
    console.log('Servidor rodando na URL http://localhost:5664')
})