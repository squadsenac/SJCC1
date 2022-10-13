const date = new Date();

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

//Objeto de Busca

function Busca(idSJCC, tituloRodape, querybusca, numvids, ordem, optLayout ) {
        this.idSJCC = idSJCC;   
        this.tituloRodape = tituloRodape;
        this.querybusca = querybusca;
        this.numvids = numvids;
        this.ordem = ordem;
        this.optLayout = optLayout;
        this.logDeBusca = function(){
            console.log(`A busca realizada será no canal SBT TV Jornal Recife./n 
            Query: ${querybusca} ,número de vídeos: ${numvids} , ordem: ${ordem}`);
        }      
};

//Prototipo do objeto de busca, com função de clonar

function PrototipoBusca(proto){

    this.proto = proto;

    this.clone = function (){
        var busca = new Busca();
        busca.idSJCC = proto.tituloRodape;
        busca.tituloRodape = proto.tituloRodape;
        busca.querybusca = proto.querybusca;
        busca.numvids = proto.numvids;
        busca.ordem = proto.ordem;
        busca.optLayout = proto.optLayout;    
    }
}

//Função de converter datas em strings mais limpas

function convertDate(dateString) {
    let rawdata = dateString.slice(0,9);
    rawdata = rawdata.parse();
    return rawdata;
};


