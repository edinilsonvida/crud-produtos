var mongoose = require('mongoose');
var produtoSchema = mongoose.Schema({
      nome: { type: String, Required: 'O nome do produto não pode ficar em branco.' },
      preco: { type: String, Required: 'O preço do produto não pode ficar em branco.' },
      categoria: { type: String, Required: 'A categoria do produto não pode ficar em branco' },
      descricao: { type: String },
      fabricante: { type: String }
});
var Produto = module.exports = mongoose.model('Produto', produtoSchema);