const dbDispensa = require("../helpers/dbConnect.js")

async function insereEstoque(estoque){
    const insere = await dbDispensa('estoque')
    .insert({estoque_produto:estoque.estoque_produto,
        estoque_local:estoque.estoque_local,
        estoque_quantidade:estoque.estoque_quantidade,
        estoque_valor:estoque.estoque_valor,
        estoque_validade:estoque.estoque_validade,
        estoque_entrada:estoque.estoque_entrada 
    });
        return insere
}
async function selectEstoque (){
    const select = await dbDispensa ('estoque')
        return select
}
async function selectEstoqueId (id){
    const select = await dbDispensa ('estoque').where('id_estoque',id);
        return select
}
async function selectproduto (id){
    const select = await dbDispensa ('estoque').where("id_produto",id);
        return select
}
async function selectlocal (id){
    const select = await dbDispensa ('estoque').where("id_local",id);
        return select
}

module.exports = {insereEstoque,
    selectEstoque,
    selectEstoqueId,
    selectproduto,
    selectlocal
    }