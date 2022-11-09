var express = require('express');
var router = express.Router();
var {gerarCodigo} = require('../search/gerar-codigo');

//Rota de teste pelo browser
router.get('/teste/', async function(req, res, next) {
  let codigo = await gerarCodigo("mosaico+lista", "VEJA MAIS VÍDEOS DA CINDERELA", "cinderela", 10, "date");    
  res.send(`${codigo}`);
});

//Rota de instruções
router.get('/', async function(req, res, next) {    
  res.send(`<p>Use a rota /teste para testar um layout isolado.</p><p>Use a rota /gerar-layouts/:optLayout/:titRodape/:query/:resultsPerPage/:order para inserir opções de geração de layouts.</p>`);
});

//Rota principal
router.get('/gerar-layouts/:optLayout/:titRodape/:query/:resultsPerPage/:order', async function(req, res, next) {
  let layout = await gerarCodigo(req.params.optLayout, req.params.titRodape, req.params.query, req.params.resultsPerPage, req.params.order);
  console.log(layout);
  res.send(`${layout}`);
});

module.exports = router;
