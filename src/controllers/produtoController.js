const ProdutoModel = require('../model/produtoModel.js')

const dbProduto = new ProdutoModel();

class ProdutoController{

    async insereProduto(req, res){
        // const resultado = await this.dbProduto.insereProduto(produto);
        // return resultado;
    }

    async selecionaProdutos(req, res){

        const produtos = await dbProduto.selecionaProdutos();
        res.status(200).send(produtos);
    }

    async selecionaProdutoNome (req, res){
        //const produto = await dbProduto.selecionaProdutoNome(nome);
        //return produto;
        res.send('Teste');
    }      
}
module.exports = ProdutoController;
