var express = require('express');
var router = express.Router();
const session = require('express-session');
const passport = require('passport');
var {gerarCodigo} = require('./gerar-codigo');
require('./auth');

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.get('/', function(req, res, next) {
  //res.send('<a href="/auth/google">Authenticate with Google</a>');
  let codigo = gerarCodigo("lista", "teste", "crime", 10, "date");
  let parsed = JSON.stringify(codigo);
  console.log(codigo);
  res.send(`${parsed}`);
});

router.get('/protected', isLoggedIn, (req, res) => {
  //res.send(`Olá ${req.user.displayName}`);
  //res.render('busca', { title: 'Gerador de Layout de Video SJCC', usuario:`${req.user.displayName}` });
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
  //res.render('index', { title: 'Gerador de Layout de Video SJCC' });
});

router.get('/busca/', function(req, res, next) {
  //res.render('busca', { title: 'Gerador de Layout de Video SJCC', usuario:`${req.user.displayName}` });
});

router.post('/preview/', function(req, res, next) {
let estilo = req.body.estilo-layout;
});

router.get('/codigo/', function(req, res, next) {
  res.render('index-materia-lista', { title: 'Rodapé tipo lista' });
});

router.post('/gerar-layouts/', function(req, res, next) {
  let layout = gerarCodigo(req.body.estilo-layout, req.body.titulo, req.body.query, req.body.numero, req.body.order);
  //let status = "Layout gerado com sucesso!";
  console.log(layout);
  res.redirect("/"); 
});

module.exports = router;
