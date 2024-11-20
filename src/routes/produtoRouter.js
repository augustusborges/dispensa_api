const express = require('express')
const ProdutoController = require('../controllers/produtoController.js')

const produtoRouter = express.Router()
const path = require('path')

const produtoController = new ProdutoController()

produtoRouter.get('/v1/produtos', produtoController.selecionaProdutos)
produtoRouter.post('/v1/produto', produtoController.insereProduto)
produtoRouter.delete('/v1/produto/:id', produtoController.deletaProduto)
produtoRouter.put('/v1/produto/:id', produtoController.alteraProduto)
module.exports = produtoRouter