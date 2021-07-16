const express = require('express')
const router = express.Router()

const albumService = require('../service/AlbumService')
const AlbumService = new albumService()

//Listar todos os álbuns
router.get('/', async (req, res) => {
    var albuns = await AlbumService.findAll()
    res.json(albuns)
})

//Listar um único álbum baseado no ID
router.get('/:id', async (req, res) => {
    var album = await AlbumService.findByID(req.params.id)
    res.json(album)
})

//Salvar um álbum
router.post('/', async (req, res) => {
    var id = await AlbumService.save(req.body)
    res.redirect('/album/' + id)
})

//Editar um álbum
router.put('/', async (req, res) => {
    var id = await AlbumService.update(req.body)
    res.redirect('/album/' + id)
})

//Deletar um álbum
router.delete('/:id', async (req, res) => {
    await AlbumService.delete(req.params.id)
    res.redirect('/album')
})

module.exports = router