var express = require('express');
const produtosController = require('../controller/produtosController')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(produtosController.getAllProdutos());
});

router.get('/:id', function(req, res, next) {
  res.json(produtosController.getProdutoById(req.params.id));
});

module.exports = router;
