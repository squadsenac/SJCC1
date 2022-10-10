const fs = require("fs");
const fetch = require("node-fetch");
const layouts = require("./layout-helpers");
var {pegarVideos} = require('./pegar-videos');

async function gerarCodigo(optLayout, titRodape, query, resultsPerPage, order){

    let linksvideos = await pegarVideos(query, resultsPerPage, order);

    let codigoFinal = '';

        if(optLayout == "lista"){

            let cabecalho = `
                <div class="col-8">
                <h4 class="tit-previews">${titRodape}</h4>
                <br>`
            let geralista = layouts.lista(resultsPerPage, linksvideos);
            let tagfecha = `</div>`
                    
            codigoFinal = cabecalho.concat(geralista, tagfecha);
        
        }else if(optLayout == "mosaico"){
            let geramosaico = layouts.mosaico(resultsPerPage, linksvideos);
            codigoFinal = `
            <div class="grid-container">\r\n
                ${geramosaico}\r\n
            </div>\r\n
            <h4 class="tit-previews">${titRodape}</h4>`;

        }else if(optLayout == "thumbnails"){

            areaCodigo.innerText = `

            <h4 class="tit-previews">${titRodape}</h4>

            <div class="vid-container">  
            <div class="grid-items"><iframe  width="405" height="285" src=${vidlinks[0]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">Triplicação da BR-232<BR-232 class=""></BR-232></p></div>
            <div class="grid-items"><iframe  width="405" height="285" src=${vidlinks[1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">PSG: NEYMAR desvaloriza 132 MILHÕES DE EUROS.</p></div>
            <div class="grid-items"><iframe  width="405" height="285" src=${vidlinks[2]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">Parte do TETO do HOSPITAL da RESTAURAÇÃO no RECIFE é derrubado após rompimento de tubulação.</p></div>
            <div class="grid-items"><iframe  width="405" height="285" src=${vidlinks[3]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">"Não podemos ter mais riscos", diz PAULO CÂMARA sobre a QUEDA DO TETO do HOSPITAL DA RESTAURAÇÃO</p></div>
            </div> `;

        }else if(optLayout == "mosaico+lista"){

            codigoFinal = `

                    <h4 class="tit-previews">${titRodape}</h4>
            <div class="grid-container">
                <div class="item1"><iframe width="482" height="345" src=${vidlinks[0]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> 
                <div class="item2"><iframe width="250" height="169" src=${vidlinks[1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="item3"><iframe width="250" height="169" src=${vidlinks[2]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>  
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
                                            <iframe width="471" height="265" src=${vidlinks[0]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
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
                                            <iframe width="471" height="265" src=${vidlinks[1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
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
                                            <iframe width="471" height="265" src=${vidlinks[2]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
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
                                            <iframe width="471" height="265" src=${vidlinks[3]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
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

        }else if(optLayout == "mosaico+thumbnails"){

       codigoFinal = `

        <h4 class="tit-previews">${titRodape}</h4>
        <div class="grid-container">
            <div class="item1"><iframe width="482" height="345" src=${vidlinks[0]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> 
            <div class="item2"><iframe width="250" height="169" src=${vidlinks[1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="item3"><iframe width="250" height="169" src=${vidlinks[2]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>  
            </div>    
        </div>

        <div class="col">  
        </div>
                <div class="vid-container">  
                    <div class="grid-items"><iframe  width="405" height="285" src=${vidlinks[0]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">Triplicação da BR-232<BR-232 class=""></BR-232></p></div>
                    <div class="grid-items"><iframe  width="405" height="285" src=${vidlinks[1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">PSG: NEYMAR desvaloriza 132 MILHÕES DE EUROS.</p></div>
                    <div class="grid-items"><iframe  width="405" height="285" src=${vidlinks[2]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">Parte do TETO do HOSPITAL da RESTAURAÇÃO no RECIFE é derrubado após rompimento de tubulação.</p></div>
                    <div class="grid-items"><iframe  width="405" height="285" src=${vidlinks[3]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">"Não podemos ter mais riscos", diz PAULO CÂMARA sobre a QUEDA DO TETO do HOSPITAL DA RESTAURAÇÃO</p></div>
                </div> 
        </div> `;

        }else{

        codigoFinal ='Selecione as configurações de layout'; 

        }

        console.log(codigoFinal);
        return codigoFinal;
}

gerarCodigo("mosaico", "teste", "crime", 10, "date");

module.exports = {gerarCodigo}