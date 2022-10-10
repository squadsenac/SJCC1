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
                                                <span class= "topico">COLUNA MOBILIDADE</span>
                                            <h5 class="descri-video">Começam as obras de triplicação da BR 232 na saída do Recife</h5>
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
        let erroMsg = "Adicione um número de vídeos para a sua pesquisa em layout mosaico";

            if(numvids != null && numvids > 0){
                for (let i=0; i < numvids; i++){
                    let blocoMosaico = `<div class="item1">
                                            <iframe width="482" height="345" src=${linksvideos.links[i]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>`
                mosaico += blocoMosaico;
                }
            }else{
                console.log(erroMsg);
            }
        
    
    return mosaico
    },
};

module.exports = layouts;