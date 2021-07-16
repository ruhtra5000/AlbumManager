const AlbumRepository = require('../repository/AlbumRepository')
const album = new AlbumRepository()
const Album = album.repo()

class AlbumService {
    async findAll(){
        var albuns = await Album.find()
        return albuns
    }

    async findByID(id){
        var album = await Album.findById(id)
        return album
    }

    async save(album){
        new Album(album).save()
        var albumSalvo = await Album.find().sort({_id: -1}).limit(1).lean()
        return albumSalvo[0]._id
    }

    async update(album){
        await Album.updateOne({_id: album._id}, {
            nome: album.nome, 
            banda: album.banda,
            quantMusicas: album.quantMusicas,
            categoria: album.categoria
        })
        return album._id
    }

    async delete(id){
        await Album.deleteOne({_id: id})
    }
}

module.exports = AlbumService