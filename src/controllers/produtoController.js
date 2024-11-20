const ProdutoModel = require('../model/produtoModel.js')

class ProdutoController{

    constructor(){
        
    }
 
    async insereProduto(req, res){
        const dbProduto = new ProdutoModel();
        const produto = req.body;
        const resultado = await dbProduto.insereProduto(produto);
        res.status(201).json(resultado);
    }

    async alteraProduto(req, res){
        const dbProduto = new ProdutoModel();
        const id = req.params.id
        const produto = req.body;
        produto.id_produto = id;
        const resultado = await dbProduto.atualizaProduto(produto);
        res.status(200).json(resultado);
    }

    async selecionaProdutos(req, res){
        const dbProduto = new ProdutoModel();
        const produtos = await dbProduto.selecionaProdutos();
        res.status(200).json(produtos);
    }

    async selecionaProdutoNome (req, res){
        //const produto = await dbProduto.selecionaProdutoNome(nome);
        //return produto;
        res.send('Teste');
    }
    
    async deletaProduto(req, res){
        const id = req.params.id
        const dbProduto = new ProdutoModel();
        const produtos = await dbProduto.deletaProduto(id);
        res.status(200).json(produtos);
    }
}
module.exports = ProdutoController;
