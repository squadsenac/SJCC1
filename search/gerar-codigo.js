const layouts = require("./layout-helpers");
const {pegarVideos} = require('./pegar-videos');

async function gerarCodigo(optLayout, titRodape, query, resultsPerPage, order){

    let linksvideos = await pegarVideos(query, resultsPerPage, order);

    let codigoFinal = '';

        if(optLayout == "lista"){

            let cabecalho = `<h4 style="text-align: center; margin: 30px; font-weight:bold">${titRodape}</h4>`
            let geralista = layouts.lista(resultsPerPage, linksvideos);
                    
            codigoFinal = cabecalho + geralista;
        
        }else if(optLayout == "mosaico"){
            let geramosaico = layouts.mosaico(resultsPerPage, linksvideos);
            codigoFinal = `<h4 style="text-align: center; margin: 30px; font-weight:bold">${titRodape}</h4>\r\n
                ${geramosaico}\r\n`;

        }else if(optLayout == "thumbnails"){
            let gerarThumbs = layouts.thumbnails(resultsPerPage, linksvideos);
            let cabecalho = `<h4 style="text-align: center; margin: 30px; font-weight:bold">${titRodape}</h4> `
            codigoFinal = cabecalho + gerarThumbs;

        }else if(optLayout == "mosaico+lista"){
            let geralista = layouts.lista(resultsPerPage, linksvideos);
            let geramosaico = layouts.mosaico(resultsPerPage, linksvideos);
            codigoFinal = `
                    <h4 style="text-align: center; margin: 30px; font-weight:bold">${titRodape}</h4>
                    ${geramosaico}
                    ${geralista}`;

        }else if(optLayout == "mosaico+thumbnails"){

            let gerarThumbs = layouts.thumbnails(resultsPerPage, linksvideos);
            let geramosaico = layouts.mosaico(resultsPerPage, linksvideos);
            codigoFinal = `<h4 style="text-align: center; margin: 30px; font-weight:bold">${titRodape}</h4>
                    ${geramosaico}
                    ${gerarThumbs}`;

        }else{

        codigoFinal ='Selecione as configurações de layout'; 

        }

        //console.log(codigoFinal);
        return codigoFinal;
}

//gerarCodigo("thumbnails", "Título Provisório", "Crime", 10, "date");

module.exports = {gerarCodigo}