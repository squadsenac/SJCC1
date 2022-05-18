
    let btn_lista = document.getElementById("lista");
    let btn_mosaico = document.getElementById("mosaico");
    let btn_thumbs = document.getElementById("thumbs");
    let btn_prev = document.getElementById("link-prev");
    let bnt_add_tag = document.getElementById("plus");
    let bnt_res_tag = document.getElementById("res-tags");
    let field_aviso = document.getElementById("aviso_tags");
    let btnCodigo = document.getElementById("btnCodigo");
    let areaCodigo = document.getElementById("areaCodigo");
    let inputTitulo = document.getElementById("inp-titulo").value;
    let optLayout = 0;

    // Contagem de Tags
    var countTag = 1;
    field_aviso.innerHTML = countTag-1 + " /8 tags adicionadas."

    //Urls de acordo com o tipo de Organização(a revisar, funcionou na primeira pagina de tags, agora parou de funcionar)
    btn_lista.addEventListener('click', function(){
                btn_prev.href = "./index-materia-lista.html";
                optLayout = 1;
    });

    btn_mosaico.addEventListener('click', function(){
                btn_prev.href = "./index-materia-mosaico.html";
                optLayout = 2;
    });

    btn_thumbs.addEventListener('click', function(){
                btn_prev.href = "./index-materia-thumbs.html";
                optLayout = 3;
    });

    //Função para criar tags, contar o número de criadas e deletá-las apertendo o 'X'.
    function criarTag(){
        
        if(countTag<=8){ 
            
            let nome_tag = document.getElementById("busca-tags").value;

            let new_tag = document.createElement("button");
            new_tag.type = "button";
            new_tag.id = "tag" + countTag;
            new_tag.innerHTML = nome_tag;
            new_tag.className = "nome";
            tagsVars[countTag -1] = nome_tag;
                

            let self_del = document.createElement("img");
            self_del.className = "delete";
            self_del.src = "src/icons8-delete-64.png";
            self_del.onclick = function(){
                new_tag.remove();
                field_aviso.innerHTML = countTag -2 + " /8 tags adicionadas.";
                tagsVars[countTag -1] = ""; //a revisar (remover item especifico de um array)
                countTag--; 
            };
        
            document.getElementById("tags2").appendChild(new_tag);
            document.getElementById("tag" + countTag).appendChild(self_del);
            field_aviso.innerHTML = countTag + " /8 tags adicionadas."
            countTag++;
            
        }else{
            field_aviso.innerHTML = "Número máximo de tags alcançada.";
        };

    };

    function resetTags(){

        let numpills = countTag;

        if(countTag >1){
            for(let i = 1; i<=numpills; i++){
                let pillTag = document.getElementById("tag" + i);
                pillTag.remove();
                countTag--;
                field_aviso.innerHTML = countTag -1 + " /8 tags adicionadas."                
            } 
        
                   
        }
        
    }

    
    //Função para gerar código com o botão a partir de Tags, datas e organização.
    
        let videosArray = [{titulo: "Notícia 1", Tags: "Cotidiano", Url: "https://www.youtube.com/watch?v=6h2h4zIhwuM"}, {titulo: "Notícia 2", Tags: "Crime", Url: "https://www.youtube.com/watch?v=oYEXeW94z5A"} ]

        function gerarCodigo(){
        
            let testing = videosArray[1].Url;

            if(optLayout == 1){
        
                    areaCodigo.innerText = `
                    
                    <div class="col-8">

                    <h4 class="tit-previews">${inputTitulo}</h4>
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
            }else if(optLayout == 2){

                areaCodigo.innerText = ` <div class="grid-container">
                <div class="item1"><iframe width="482" height="345" src="https://www.youtube.com/embed/yZHRgk1HZiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> 
                <div class="item2"><iframe width="250" height="169" src="https://www.youtube.com/embed/6TIJma_Wbu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="item3"><iframe width="250" height="169" src="https://www.youtube.com/embed/5Qb6PWwCYmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>  
                </div>    
                </div>
                <h4 class="tit-previews">${inputTitulo}</h4>`;

            }else if(optLayout == 3){
                
                areaCodigo.innerText = `
                
                <h4 class="tit-previews">${inputTitulo}</h4>

                <div class="vid-container">  
                <div class="grid-items"><iframe  width="405" height="285" src="https://www.youtube.com/embed/yZHRgk1HZiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">Triplicação da BR-232<BR-232 class=""></BR-232></p></div>
                <div class="grid-items"><iframe  width="405" height="285" src="https://www.youtube.com/embed/lV1sPS0VK9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">PSG: NEYMAR desvaloriza 132 MILHÕES DE EUROS.</p></div>
                <div class="grid-items"><iframe  width="405" height="285" src="https://www.youtube.com/embed/bnGIoHzOq-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">Parte do TETO do HOSPITAL da RESTAURAÇÃO no RECIFE é derrubado após rompimento de tubulação.</p></div>
                <div class="grid-items"><iframe  width="405" height="285" src="https://www.youtube.com/embed/rBpFijgtKnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="descri-video">"Não podemos ter mais riscos", diz PAULO CÂMARA sobre a QUEDA DO TETO do HOSPITAL DA RESTAURAÇÃO</p></div>
                </div> `;
                
            }else{

                areaCodigo.innerText ='Selecione as configurações de layout'; 

            }
        }
        
  

