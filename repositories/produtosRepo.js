const Produto = require('../models/Produto')

let produtos = [];

produtos.push(new Produto({
    "id": "1",
    "name": "Televisão",
    "price": 1899.0,
    "discount": "10%",
    "seller": "LG Oficial",
    "ratings": 4.71,
    "images": ["pngfile2.png", "pngfile2.png"],
    "description": "Televisão de 49 polegadas 4K",
    "category": "Televisões e Monitores"
}))

produtos.push(new Produto({
    "id": "2",
    "name": "Sofá",
    "price": 689.90,
    "discount": "25%",
    "seller": "Sofas & Chairs",
    "ratings": 4.21,
    "images": ["pngfile2.png", "pngfile2.png"],
    "description": "Sofá de 4 assentos a prova de respingos e gotas de água.",
    "category": "Sofás e Cadeiras"
}))

const produtosRepo = {
    getAllProdutos() {
        return produtos;
    },

    getProdutoById(id) {
        return produtos.find(prod => prod.id == id);
    }
}

module.exports = produtosRepo;