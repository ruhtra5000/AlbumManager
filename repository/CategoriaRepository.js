const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model('categorias') 

class CategoriaRepository {
    repo(){
        return Categoria
    }
}

module.exports = CategoriaRepository