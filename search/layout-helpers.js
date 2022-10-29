const layouts = {
    lista: function (numvids, linksvideos){
                let lista = "";
                let erroMsg = "Adicione um número de vídeos para a sua pesquisa em layout lista.";
        
                    if(numvids != null && numvids > 0){
                        for (let i=0; i < numvids; i++){
                            let blocolista =  `<div id= "card2" class="card mb-3 rounded-0 border-0 border-bottom" style="max-width: auto;">
                            <div class="row g-0">   
                                <div class="col">
                                        <iframe width="471" height="265" src=${linksvideos.links[i]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                                <span class= "topico">${linksvideos.titulos[i]}</span>
                                            <h5 class="descri-video">${linksvideos.descritivos[i]}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>`
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

            if(numvids != null && numvids > 0 && numvids <= 3){
                    mosaico = `  
                    <div class="mos-layout" style="display: flex; flex-direction:row; margin: 7px; justify-content: center;">
                        <div class="mos-vid-grande" style="display:flex; margin-top: 5px; margin-bottom: 5px; margin-right: 5px;">
                            <iframe width="482" height="345" src=${linksvideos.links[0]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-top-left-radius: 15px; border-bottom-left-radius: 15px;"></iframe>
                        </div>
                        <div class="mos-vid-pequeno" style="display: flex; flex-direction:column; margin: 3px;">
                            <iframe width="241" height="172" src=${linksvideos.links[1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="margin-bottom: 3px; border-top-right-radius: 15px;"></iframe>
                            <iframe width="241" height="172" src=${linksvideos.links[2]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="margin-bottom: 3px;border-bottom-right-radius: 15px;"></iframe>
                        </div>
                    </div>   `
            }else{
                console.log(erroMsg);
            }
        
    
    return mosaico
    },
    thumbnails: function (numvids, linksvideos){
        let thumbs = "";
        let header = ` <div style = "display: grid; grid-template-columns: repeat(3, 1fr);">`;
        let closetag = `</div>`;
        let erroMsg = "Adicione um número de vídeos para o seu layout.";

            if(numvids != null && numvids > 0){
                    for (let i=0; i < numvids; i++){
                        let blocothumbs =  `
                        <div style="display: flex; flex-direction: column; align-items: center ;margin: auto;"><iframe style="margin: 20px;"  width="405" height="285" src=${linksvideos.links[i]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p style="padding: 0px; margin-left: 0px;; word-wrap: break-word; width: 70%; text-align: center;">${linksvideos.titulos[i]}</p></div>
                         `;
                       
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