const mongoose = require('mongoose')

const Album = new mongoose.Schema({
    nome: String,
    banda: String,
    quantMusicas: Number,
    categoria: {
        type: mongoose.Types.ObjectId,
        ref: 'categorias'
    }
})

mongoose.model('albuns', Album)
module.exports = Album