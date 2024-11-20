const express = require('express')
const ProdutoController = require('../controllers/produtoController.js')

const router = express.Router()
const path = require('path')

const produtoController = new ProdutoController()

router.get('/v1/produtos', produtoController.selecionaProdutos)

module.exports = router