const dbDispensa = require('../helpers/dbConnect.js')

async function insereLocal(nomeLocal){
  const resultado = await dbDispensa('local').insert({nome_local: nomeLocal});
  return resultado;
}

async function selecionaLocais(){
  const locais = await dbDispensa('local');
  return locais;
}

async function selecionaLocal(id){
  const local = await dbDispensa('local').where('id_local', id);
  return local;
}

async function atualizaLocal(id, local){
  const resultado = await dbDispensa('local').where("id_local", id).update({nome_local: local});
  return resultado;
}

async function deletaLocal(id){
  const resultado = await dbDispensa('local').where("id_local", id).del();
  return resultado
}

async function selecionaLocalNome (nome){
  const local = await dbDispensa("local").where ("nome_local","like",`%${nome}%`);
  return local;
}

module.exports = {insereLocal, 
  selecionaLocais,
  selecionaLocal,
  atualizaLocal,
  deletaLocal,
  selecionaLocalNome      
}