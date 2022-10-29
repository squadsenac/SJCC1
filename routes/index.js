var express = require('express');
var router = express.Router();
const session = require('express-session');
const passport = require('passport');
var {gerarCodigo} = require('../search/gerar-codigo');
require('./auth');

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.get('/', async function(req, res, next) {
  //res.send('<a href="/auth/google">Authenticate with Google</a>');
  let codigo = await gerarCodigo("mosaico+lista", "VEJA MAIS VÍDEOS DA CINDERELA", "cinderela", 10, "date");    
  res.send(`${codigo}`);
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
  console.log(layout);
  res.send(`${layout}`);
  next();
});

module.exports = router;
