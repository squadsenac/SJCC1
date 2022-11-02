var express = require('express');
var router = express.Router();
var {gerarCodigo} = require('../search/gerar-codigo');

router.get('/', async function(req, res, next) {
  //res.send('<a href="/auth/google">Authenticate with Google</a>');
  let codigo = await gerarCodigo("mosaico+lista", "VEJA MAIS VÍDEOS DA CINDERELA", "cinderela", 10, "date");    
  res.send(`${codigo}`);
});

router.post('/gerar-layouts/', function(req, res, next) {
  let layout = gerarCodigo(req.body.estilo-layout, req.body.titulo, req.body.query, req.body.numero, req.body.order);
  console.log(layout);
  res.send(`${layout}`);
  next();
});

router.get('/gerar-layouts/:optLayout/:titRodape/:query/:resultsPerPage/:order', async function(req, res, next) {
  let layout = await gerarCodigo(req.params.optLayout, req.params.titRodape, req.params.query, req.params.resultsPerPage, req.params.order);
  console.log(layout);
  res.send(`${layout}`);
});

module.exports = router;
