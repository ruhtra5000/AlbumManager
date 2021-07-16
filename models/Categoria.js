const mongoose = require('mongoose')

//Indica o estilo musical de um album
const Categoria = new mongoose.Schema({
    nome: String
})

mongoose.model('categorias', Categoria)
module.exports = Categoria