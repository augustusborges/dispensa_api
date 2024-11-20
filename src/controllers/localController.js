const dbLocal = require('../model/localModel.js')

class LocalController{
    async insereLocal(local){
        const resultado = await dbLocal.insereLocal(local);
        return resultado;
    }

    async selecionaLocais(){
        const local = await dbLocal.selecionaLocais();
        return local;
    }

    async selecionaLocalNome (nome){
        const local = await dbLocal.selecionaLocalNome(nome);
        return local;
    }

}
module.exports = LocalController;
