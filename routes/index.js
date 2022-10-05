var express = require('express');
var router = express.Router();
const session = require('express-session');
const passport = require('passport');
var {pegarVideos} = require('./pegar-videos');
var {gerarCodigo} = require('./gerar-codigo');
require('./auth');

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.get('/', function(req, res, next) {
  //res.send('<a href="/auth/google">Authenticate with Google</a>');
  res.render('index', { title: 'Gerador de Layout de Video SJCC' });
});

router.get('/protected', isLoggedIn, (req, res) => {
  //res.send(`Olá ${req.user.displayName}`);
  res.render('busca', { title: 'Gerador de Layout de Video SJCC', usuario:`${req.user.displayName}` });
});

router.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

router.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
  })
);

router.get('/auth/google/failure', (req, res) => {
  res.send('Falha na autentificação...');
});

router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  //res.send('Goodbye!');
  res.render('index', { title: 'Gerador de Layout de Video SJCC' });
});

router.get('/busca/', function(req, res, next) {
  res.render('busca', { title: 'Gerador de Layout de Video SJCC', usuario:`${req.user.displayName}` });
});

router.post('/preview/', function(req, res, next) {
let estilo = req.body.estilo-layout;
  if(estilo = "lista"){
    res.render('index-materia-lista', { title: 'Rodapé tipo lista' });
  }else if(estilo = "mosaico"){
    res.render('index-materia-mosaico', { title: 'Rodapé tipo mosaico' });
  }else if(estilo = "thumbnails"){
    res.render('index-materia-thumbs', { title: 'Rodapé tipo thumbnails' });
  }else if(estilo = "mosaico+lista"){
    res.render('index-materia-mosaico-lista', { title: 'Rodapé tipo mosaico e lista' });
  }else if(estilo = "mosaico+thumbnails"){
    res.render('index-materia-mosaico-thumbs', { title: 'Rodapé tipo mosaico e thumbnails' });
  }
});

router.get('/codigo/', function(req, res, next) {
  res.render('index-materia-lista', { title: 'Rodapé tipo lista' });
});

router.post('/gerar-layouts/', async function(req, res, next) {
  let codigo = await gerarCodigo(req.body.estilo-layout, req.body.titulo, req.body.query, req.body.numero, req.body.order);
  let status = "Layout gerado com sucesso!";
  res.redirect("/"); 
  res.render('busca', { title: 'Gerador de Layout de Video SJCC', usuario:`${req.user.displayName}`,codigo: codigo, preview: codigo, status: status });
});

module.exports = router;
