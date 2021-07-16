const CategoriaRepository = require('../repository/CategoriaRepository')
const categoria = new CategoriaRepository()
const Categoria = categoria.repo()

class CategoriaService {
    async findAll(){
        var categorias = await Categoria.find()
        return categorias
    }

    async findByID(id){
        var categoria = await Categoria.findById(id)
        return categoria
    }

    async save(categoria){
        new Categoria(categoria).save()
        var categoriaSalva = await Categoria.find().sort({_id: -1}).limit(1).lean()
        return categoriaSalva[0]._id
    }

    async update(categoria){
        await Categoria.updateOne({_id: categoria._id}, {
            nome: categoria.nome
        })
        return categoria._id
    }

    async delete(id){
        await Categoria.deleteOne({_id: id})
    }
}

module.exports = CategoriaService