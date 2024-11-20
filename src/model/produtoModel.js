const dbDispensa = require('../helpers/dbConnect.js')

class ProdutoModel{
async insereProduto(produto){
  const resultado = await dbDispensa('produto')
  .insert({nome_produto: produto.nome_produto,
    detalhe_produto: produto.detalhe_produto,
    valor_produto: produto.valor_produto,});
  return resultado;
}

async selecionaProdutos(){
  const produtos = await dbDispensa('produto');
  return produtos;
}

async selecionaProduto(id){
  const produto = await dbDispensa('produto').where('id_produto', id);
  return produto;
}

async atualizaProduto(produto){
  const resultado = await dbDispensa('produto')
  .where("id_produto", produto.id_produto)
  .update({nome_produto: produto.nome_produto, detalhe_produto: produto.detalhe_produto, valor_produto: produto.valor_produto});
   return resultado;
}

async deletaProduto(id){
  const resultado = await dbDispensa('produto').where("id_produto", id).del();
  return resultado;
}

async selecionaProdutoNome(nomeProduto){
  const produto = await dbDispensa('produto').where('nome_produto', nomeProduto);
  return produto;
}
}

module.exports = ProdutoModel;