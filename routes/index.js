var express = require('express');
var router = express.Router();
const session = require('express-session');
const passport = require('passport');
var {gerarCodigo} = require('../search/gerar-codigo');
require('./auth');

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.get('/', function(req, res, next) {
  //res.send('<a href="/auth/google">Authenticate with Google</a>');

  async function pegarResultado(){
    let codigo = await gerarCodigo("lista", "teste", "crime", 10, "date");
    console.log(codigo);
    return codigo;
  }


  let resultado = pegarResultado();

  let parsed = JSON.parse(resultado);
  
  res.status(200).send("<h1>teste</h1>");

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

router.post('/gerar-layouts/', function(req, res, next) {
  let layout = gerarCodigo(req.body.estilo-layout, req.body.titulo, req.body.query, req.body.numero, req.body.order);
  //let status = "Layout gerado com sucesso!";
  console.log(layout);
  res.send(layout);
  res.redirect("/"); 
});

module.exports = router;
