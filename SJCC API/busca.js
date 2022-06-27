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

class busca {
    titRodape = "";
    buscatags = [];
    numvids = 1;
    datainicio = 0;
    datafinal = 0;
    optLayout = 0;
};

class resultado {
    urlsfinais = [];
    descritVideos = [];
}

function convertDate(dateString) {
    let rawdata = dateString.slice(0,9);
    rawdata = rawdata.parse();
    return rawdata;
};

function resFinal(){
    
    let codigoFinal = '';

        if(busca.optLayout == 1){
                    
                codigoFinal = `
                
                <div class="col-8">

                <h4 class="tit-previews">${busca.titRodape}</h4>
                <br>

                <div id= "card2" class="card mb-3 rounded-0 border-0 border-bottom" style="max-width: auto;">
                    <div class="row g-0">   
                        <div class="col">
                                <iframe width="471" height="265" src="https://www.youtube.com/embed/5Qb6PWwCYmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
                        </div>
                        <div class="col">
                            <div class="card-body">
                                        <span class= "topico">COLUNA MOBILIDADE</span>
                                    <h5 class="descri-video">Começam as obras de triplicação da BR 232 na saída do Recife</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div id= "card2" class="card mb-3 rounded-0 border-0 border-bottom" style="max-width: auto; ">
                    <div class="row g-0">
                        <div class="col">
                                <iframe width="471" height="265" src="https://www.youtube.com/embed/3-QmvUD461E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
                        </div>
                        <div class="col">
                            <div class="card-body">
                                    <span class= "topico">COLUNA MOBILIDADE</span>
                                <h5 class="descri-video">SEMANA SANTA: três PESSOAS ficam FERIDAS em ENGAVETAMENTO na BR 232</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div id= "card2" class="card mb-3 rounded-0 border-0 border-bottom" style="max-width: auto; ">
                    <div class="row g-0">
                        <div class="col">
                                <iframe width="471" height="265" src="https://www.youtube.com/embed/cORbb0xt9Ak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
                        </div>
                        <div class="col">
                            <div class="card-body">
                                    <span class= "topico">COLUNA MOBILIDADE</span> <!--Classe nova-->
                                <h5 class="descri-video">Pernambuco tem três rodovias entre as dez piores do País</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div id= "card2" class="card mb-3 rounded-0  border-0 " style="max-width: auto; ">
                    <div class="row g-0">
                        <div class="col">
                                <iframe width="471" height="265" src="https://www.youtube.com/embed/WU34cgcqdK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
                        </div>
                        <div class="col">
                            <div class="card-body">
                                    <span class= "topico">COLUNA MOBILIDADE</span>
                                <h5 class="descri-video">Pedágios em Pernambuco: Saiba quais e serão as praças de pedágio das rodovias de Estado</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }else if(busca.optLayout == 2){

            areaCodigo.innerText = ` <div class="grid-container">
            <div class="item1"><iframe width="482" height="345" src="https://www.youtube.com/embed/yZHRgk1HZiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> 
            <div class="item2"><iframe width="250" height="169" src="https://www.youtube.com/embed/6TIJma_Wbu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="item3"><iframe width="250" height="169" src="https://www.youtube.com/embed/5Qb6PWwCYmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>  
            </div>    
            </div>
            <h4 class="tit-previews">${busca.titRodape}</h4>`;

        }else if(busca.optLayout == 3){

            areaCodigo.innerText = `

            <h4 class="tit-previews">${busca.titRodape}</h4>

            <div class="vid-container">  
            <div class="grid-items"><iframe  width="405" height="285" src="https://www.youtube.com/embed/yZHRgk1HZiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">Triplicação da BR-232<BR-232 class=""></BR-232></p></div>
            <div class="grid-items"><iframe  width="405" height="285" src="https://www.youtube.com/embed/lV1sPS0VK9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">PSG: NEYMAR desvaloriza 132 MILHÕES DE EUROS.</p></div>
            <div class="grid-items"><iframe  width="405" height="285" src="https://www.youtube.com/embed/bnGIoHzOq-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">Parte do TETO do HOSPITAL da RESTAURAÇÃO no RECIFE é derrubado após rompimento de tubulação.</p></div>
            <div class="grid-items"><iframe  width="405" height="285" src="https://www.youtube.com/embed/rBpFijgtKnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">"Não podemos ter mais riscos", diz PAULO CÂMARA sobre a QUEDA DO TETO do HOSPITAL DA RESTAURAÇÃO</p></div>
            </div> `;

        }else if(busca.optLayout == 4){

            codigoFinal = `

                    <h4 class="tit-previews">${busca.titRodape}</h4>
            <div class="grid-container">
                <div class="item1"><iframe width="482" height="345" src="https://www.youtube.com/embed/yZHRgk1HZiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> 
                <div class="item2"><iframe width="250" height="169" src="https://www.youtube.com/embed/6TIJma_Wbu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="item3"><iframe width="250" height="169" src="https://www.youtube.com/embed/5Qb6PWwCYmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>  
                </div>    
            </div>

            <div class="tube-vids">
                <div class="row">

                    <div class="col">
                    </div>

                        <div class="col-9">

                            <div id= "card2" class="card mb-3 rounded-0 border-0 border-bottom" style="max-width: auto;">
                                <div class="row g-0">   
                                    <div class="col-sm-7">
                                            <iframe width="471" height="265" src="https://www.youtube.com/embed/5Qb6PWwCYmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="card-body">
                                                    <span class= "topico">COLUNA MOBILIDADE</span>
                                                <h5 class="descri-video">Começam as obras de triplicação da BR 232 na saída do Recife</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id= "card2" class="card mb-3 rounded-0 border-0 border-bottom" style="max-width: auto; ">
                                <div class="row g-0">
                                    <div class="col-sm-7">
                                            <iframe width="471" height="265" src="https://www.youtube.com/embed/3-QmvUD461E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="card-body">
                                                <sp an class= "topico">COLUNA MOBILIDADE</sp>
                                            <h5 class="descri-video">SEMANA SANTA: três PESSOAS ficam FERIDAS em ENGAVETAMENTO na BR 232</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id= "card2" class="card mb-3 rounded-0 border-0 border-bottom" style="max-width: auto; ">
                                <div class="row g-0">
                                    <div class="col-sm-7">
                                            <iframe width="471" height="265" src="https://www.youtube.com/embed/cORbb0xt9Ak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="card-body">
                                                <span class= "topico">COLUNA MOBILIDADE</span> <!--Classe nova-->
                                            <h5 class="descri-video">Pernambuco tem três rodovias entre as dez piores do País</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id= "card2" class="card mb-3 rounded-0  border-0 " style="max-width: auto; ">
                                <div class="row g-0">
                                    <div class="col-sm-7">
                                            <iframe width="471" height="265" src="https://www.youtube.com/embed/WU34cgcqdK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="card-body">
                                                <span class= "topico">COLUNA MOBILIDADE</span>
                                            <h5 class="descri-video">Pedágios em Pernambuco: Saiba quais e serão as praças de pedágio das rodovias de Estado</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div> `;

        }else if(busca.optLayout == 5){

       codigoFinal = `

        <h4 class="tit-previews">${busca.titRodape}</h4>
        <div class="grid-container">
            <div class="item1"><iframe width="482" height="345" src="https://www.youtube.com/embed/yZHRgk1HZiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> 
            <div class="item2"><iframe width="250" height="169" src="https://www.youtube.com/embed/6TIJma_Wbu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="item3"><iframe width="250" height="169" src="https://www.youtube.com/embed/5Qb6PWwCYmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>  
            </div>    
        </div>

        <div class="col">  
        </div>
                <div class="vid-container">  
                    <div class="grid-items"><iframe  width="405" height="285" src="https://www.youtube.com/embed/yZHRgk1HZiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">Triplicação da BR-232<BR-232 class=""></BR-232></p></div>
                    <div class="grid-items"><iframe  width="405" height="285" src="https://www.youtube.com/embed/lV1sPS0VK9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">PSG: NEYMAR desvaloriza 132 MILHÕES DE EUROS.</p></div>
                    <div class="grid-items"><iframe  width="405" height="285" src="https://www.youtube.com/embed/bnGIoHzOq-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">Parte do TETO do HOSPITAL da RESTAURAÇÃO no RECIFE é derrubado após rompimento de tubulação.</p></div>
                    <div class="grid-items"><iframe  width="405" height="285" src="https://www.youtube.com/embed/rBpFijgtKnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">"Não podemos ter mais riscos", diz PAULO CÂMARA sobre a QUEDA DO TETO do HOSPITAL DA RESTAURAÇÃO</p></div>
                </div> 
        </div> `;

        }else{

        codigoFinal ='Selecione as configurações de layout'; 

        }

}
