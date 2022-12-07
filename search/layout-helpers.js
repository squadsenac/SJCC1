const {checarDescritivo, tratarTitulo} = require('./metodos-strings');

const layouts = {
    lista: function (numvids, linksvideos){
                let lista = "";
                let erroMsg = "Adicione um número de vídeos para a sua pesquisa em layout lista.";
        
                    if(numvids != null && numvids > 0){
                        for (let i=0; i < numvids; i++){
                           
                            titulofinal = tratarTitulo(linksvideos.titulos[i]);
                            descritivoFinal = checarDescritivo(linksvideos.descritivos[i]);

                            let blocolista =  `                 
                                    <div class="ly-lista">
                                        <div class="videos-lista"><iframe class="ifr-lista" width="471" height="265" src=${linksvideos.links[i]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                                        <div class="bl-txt-lista">

                                            <span class="titulo-lista">${titulofinal}</span>
                                            <p class="descritivo-lista">${descritivoFinal}</p>

                                        </div>
                                    </div> `
                            lista += blocolista;
                        }
                    }else{
                        console.log(erroMsg);
                    }
                           
            return lista
    },
    mosaico: function(numvids, linksvideos){
        let mosaico = "";
        let erroMsg = "Adicione um número de vídeos válido (3 vídeos) para a sua pesquisa em layout mosaico";

            if(numvids != 3){
                numvids = 3;
            }

            linksvideos.links.sort(function(){return 0.5 - Math.random()});

            if(numvids != null && numvids > 0 && numvids <= 3){
                    mosaico = `  
                    <div class="mos-layout" style="display: flex; flex-direction:row; margin: 7px; justify-content: center;">
                        <div class="mos-vid-grande" style="display:flex; margin-top: 5px; margin-bottom: 5px; margin-right: 5px;">
                            <iframe class="mos-ifr-grande" width="482" height="345" src=${linksvideos.links[0]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-top-left-radius: 15px; border-bottom-left-radius: 15px;"></iframe>
                        </div>
                        <div class="mos-vid-pequeno" style="display: flex; flex-direction:column; margin: 3px;">
                            <iframe class="mos-ifr-pequeno" width="241" height="172" src=${linksvideos.links[1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="margin-bottom: 3px; border-top-right-radius: 15px;"></iframe>
                            <iframe class="mos-ifr-pequeno" width="241" height="172" src=${linksvideos.links[2]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="margin-bottom: 3px;border-bottom-right-radius: 15px;"></iframe>
                        </div>
                    </div>   `
            }else{
                console.log(erroMsg);
            }
        
    
    return mosaico
    },
    thumbnails: function (numvids, linksvideos){
        let thumbs = "";
        let header = ` <div class="th-main" style = "display: grid; grid-template-columns: repeat(3, 1fr); padding: 0px; margin: 0px; max-width: 50px">`;
        let closetag = `</div>`;
        let erroMsg = "Adicione um número de vídeos para o seu layout.";

            if(numvids != null && numvids > 0){
                    
                    for (let i=0; i < numvids; i++){
                        let titulofinal = "";
                        let tamanhotitulo = linksvideos.titulos[i].length;
                        if(tamanhotitulo > 60){
                            titulofinal = linksvideos.titulos[i].slice(0,61) + "...";
                        }else{
                            titulofinal = linksvideos.titulos[i];
                        }
                        
                        let blocothumbs = `
                        <div class="th-block" style="display: flex; flex-direction: column; align-items: center; margin: auto; border-radius: 15px;"><iframe class="th-ifr" style="margin: 20px; border-radius: 15px;"  width="375" height="255" src=${linksvideos.links[i]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="th-desc" style="padding: 0px; margin-left: 0px;; word-wrap: break-word; width: 70%; text-align: center;">${titulofinal}</p></div>`;
                       
                        thumbs += blocothumbs;
                    }
            }else{
                console.log(erroMsg);
            }

    let thumbsfinais = header + thumbs + closetag;
           
    return thumbsfinais
},
};

module.exports = layouts;