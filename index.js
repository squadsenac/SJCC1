let fs = require('fs');
let cors = require('cors');
var express = require('express');
const usetube = require('usetube');
var app = express();
const FILE_NAME = "./data/dados.json";
const YOUTUBE_SEARCH = "./data/search-result.json";
var opcao = 1;

let router = express.Router();

app.use(express.json());
app.use(cors());

async function gerarBusca(){

    let tube = new Promise(function(resolve,reject){

        fs.readFile(YOUTUBE_SEARCH, (err, data) => {
            if(err){
                console.log(err);
                return;
            }else{
                let resultadoBusca = app.get('/', 
                    function(req, res, next){
                        res.status(200).send(JSON.stringify(busca));
                        let buscaPar = JSON.parse(busca);
                        fs.writeFile(YOUTUBE_SEARCH, JSON.stringify(buscaPar),{
                            encoding: 'utf8',
                            flag: 'w'
                        } , function(err){
                            if (err) return console.log(err);
                        });
                });
                resolve(resultadoBusca); 
            };
          
        });
    });

    //Pegar todos os videos do canal
    // let busca = await usetube.getChannelVideos('TV Jornal');

    let busca = await usetube.searchVideo('TV Jornal');
    console.log(busca);
};

if(opcao == 1){    
   
   gerarBusca();   

}else{
    app.get('/', function(req,res, next){
        res.send('Busca e obtenção de dados desativada.');
    });
}



var server = app.listen(4000, function(){
    console.log('Servidor rodando na porta http://localhost:4000..');
});