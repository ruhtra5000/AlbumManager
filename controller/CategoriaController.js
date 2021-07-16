const express = require('express')
const router = express.Router()

const categoriaService = require('../service/CategoriaService')
const CategoriaService = new categoriaService()

//Listar todas as categorias
router.get('/', async (req, res) => {
    var categorias = await CategoriaService.findAll()
    res.json(categorias)
})

//Listar uma única categoria usando o ID
router.get('/:id', async (req, res) => {
    var categoria = await CategoriaService.findByID(req.params.id)
    res.json(categoria)
})

//Salvar uma categoria
router.post('/', async (req, res) => {
    var id = await CategoriaService.save(req.body)
    res.redirect('/categoria/' + id)
})

//Editar uma categoria
router.put('/', async (req, res) => {
    var id = await CategoriaService.update(req.body)
    res.redirect('/categoria/' + id)
})

//Deletar uma categoria
router.delete('/:id', async (req, res) => {
    await CategoriaService.delete(req.params.id)
    res.redirect('/categoria')
})

module.exports = router