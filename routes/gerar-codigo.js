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
            <h4 class="tit-previews">${titRodape}</h4>\r\n
                ${geramosaico}\r\n`;

        }else if(optLayout == "thumbnails"){
            let gerarThumbs = layouts.gerarThumbs(resultsPerPage, linksvideos);
            codigoFinal = `
            <h4 style="text-align: center; margin: 30px;">${titRodape}</h4>
            ${gerarThumbs} `;

        }else if(optLayout == "mosaico+lista"){
            let geralista = layouts.lista(resultsPerPage, linksvideos);
            let geramosaico = layouts.mosaico(resultsPerPage, linksvideos);
            codigoFinal = `
                    <h4 class="tit-previews">${titRodape}</h4>
                    ${geramosaico}
                    ${geralista}`;

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

gerarCodigo("thumbnails", "Título Provisório", "Crime", 10, "date");

module.exports = {gerarCodigo}