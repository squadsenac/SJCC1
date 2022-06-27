let fs = require('fs');
let cors = require('cors');
var express = require('express');
const usetube = require('usetube');
let buscaVideos = require('./busca');
var app = express();
const FILE_NAME = "./SJCC API/data/dados.json";
const YOUTUBE_SEARCH = "./SJCC API/data/search-result.json";
var opcao = 1;

let router = express.Router();

app.use(express.json());
app.use(cors());

if(opcao == 1){    
   
   busca.gerarBusca();   

}else{
    app.get('/', function(req,res, next){
        res.send('Busca e obtenção de dados desativada.');
    });
}



var server = app.listen(4000, function(){
    console.log('Servidor rodando na porta http://localhost:4000..');
});