const produtosRepo = require('../repositories/produtosRepo');

const produtosController = {
    getAllProdutos() {
        return produtosRepo.getAllProdutos();
    },

    getProdutoById(id) {
        return produtosRepo.getProdutoById(id);
    }
}

module.exports = produtosController;