const dbEstoque = require('../model/estoqueModel.js');
const LocalController = require ('./localController.js')
const ProdutoController = require ('./produtoController.js')

class EstoqueController {
    
    async insereEstoque(estoque){
        let idProduto = [];
        let idLocal = [];
        const produtoController = new ProdutoController()
        
        const produto = await produtoController.selecionaProdutoNome(estoque.nome);
        if (!produto.length){
            idProduto = await produtoController.insereProduto({
                nome_produto:estoque.nome,
                detalhe_produto:'',
                valor_produto: estoque.valor
            })   
        }
        const localController = new LocalController()
        const selecina = await localController.selecionaLocalNome();
        if (!selecina.length){
            idLocal = await localController.insereLocal(estoque.local)
        }

        const retorno = dbEstoque.insereEstoque(
            {
                estoque_produto:idProduto[0],
                estoque_local: idLocal[0],
                estoque_quantidade:estoque.quantidade,
                estoque_valor:estoque.valor,
                estoque_validade:estoque.validade,
                estoque_entrada:'2024-07-30'
            })
           
}
}

const estoqueController = new EstoqueController()
estoqueController.insereEstoque({
    nome: 'feijaoPreto',
    local: 'Armario 3',
    quatidade: 5,
    valor: 22.55,
    validade: '2024-07-30'
    })


//Se nao existir o produto a funcao deve inserir o produto
//Se nao existir local a funcao tem que inserir o local
//Se nao tiver data de entrada o sistema deve inserir a data atual