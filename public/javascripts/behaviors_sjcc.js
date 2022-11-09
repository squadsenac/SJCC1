
    let btn_lista = document.getElementById("lista");
    let btn_mosaico = document.getElementById("mosaico");
    let btn_thumbs = document.getElementById("thumbs");
    let btn_mos_list = document.getElementById("moslist");
    let btn_mos_thumb = document.getElementById("mosthumb");
    let btn_prev = document.getElementById("link-prev");
    let bnt_add_tag = document.getElementById("plus");
    let bnt_res_tag = document.getElementById("res-tags");
    let field_aviso = document.getElementById("aviso_tags");
    let btnCodigo = document.getElementById("btnCodigo");
    let areaCodigo = document.getElementById("areaCodigo");

    let optLayout = 0;

    let tagsVars = [];

    // Contagem de Tags
    var countTag = 1;
    field_aviso.innerHTML = countTag-1 + " /8 tags adicionadas."

    //Urls de acordo com o tipo de Organização(a revisar, funcionou na primeira pagina de tags, agora parou de funcionar)

            btn_lista.addEventListener('click', function(){ 
                optLayout = 1;
            });

            btn_mosaico.addEventListener('click', function(){            
                optLayout = 2;
            });

            btn_thumbs.addEventListener('click', function(){            
                optLayout = 3;
            });

            btn_mos_list.addEventListener('click', function(){
                optLayout = 4;
            });

            btn_mos_thumb.addEventListener('click', function(){
                optLayout = 5;
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
            self_del.src = "/images/icons8-delete-64.png";
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

    
        //Array de vídeos para servirem para montar o código. Os arrays serão obtidos pela API(o array abaixo é de exemplo). 
    
        let videosArray = [{titulo: "Notícia 1", Tags: "Cotidiano", Url: "https://www.youtube.com/watch?v=6h2h4zIhwuM"}, {titulo: "Notícia 2", Tags: "Crime", Url: "https://www.youtube.com/watch?v=oYEXeW94z5A"} ]

         //Função para capturar o título da área de texto respectiva.

        function getVal(){
            let inputTitulo = document.getElementById("inp-titulo").value;
            return inputTitulo;
        }

        //Função para gerar preview.

        function gerarPreview(){

           /*  let ifrm = document.getElementById("iframe-prev");
            let iWin = ifrm.contentWindow;
            let iDoc = iWin.document; */

            if(optLayout == 1){

                btn_prev.href = "/index-materia-lista/";
               /*  let titulo_lista = iDoc.getElementById("tit-lista");
                titulo_lista.innerHTML = "QUALQUER"; */

            }else if(optLayout == 2){

                btn_prev.href = "/index-materia-mosaico/";
               /*  let titulo_mos = iDoc.getElementById("tit-mosaico");
                titulo_mos.innerHTML = `${getVal()}`; */

            }else if(optLayout == 3){

                btn_prev.href = "/index-materia-thumbs/";
               /*  let titulo_th = iDoc.getElementById("tit-th");
                titulo_th.innerHTML = `${getVal()}`; */

            }else if(optLayout == 4){

                btn_prev.href = "/index-materia-mosaico-lista/";
               /*  let titulo_mos_list = iDoc.getElementById("tit-mos-list");
                titulo_mos_list.innerHTML = `${getVal()}`; */

            }else if(optLayout == 5){

                btn_prev.href = "/index-materia-mosaico-thumbs/";
               /*  let titulo_mos_th = iDoc.getElementById("tit-mos-th");
                titulo_mos_th.innerHTML = `${getVal()}`;  */

            }else{
                
            }

        }
           

      /*   //Função para gerar código com o botão a partir de Tags, datas e organização.
    
        function gerarCodigo(){
        
            let xhttp = new XMLHttpRequest();

            // xhttp.onload = function(){areaCodigo.innerText = this.response};
        
            xhttp.open("GET", "http://localhost:4000");
            xhttp.send();

        } */
           
        function copiarCodigo(){;

            areaCodigo.select();
            areaCodigo.setSelectionRange(0, 99999);

            navigator.clipboard.writeText(areaCodigo.value);

            console.log("Texto copiado");
        }

        function ativarCampos(){
            let arq = document.getElementById("formFile");
            let url = document.getElementById("basic-url");
            let chk = document.getElementById("chk-files");
            if(arq.disabled == true & url.disabled == true){
                arq.disabled = false;
                url.disabled = false;
            }else{
                arq.disabled = true;
                url.disabled = true;
            }
        }

        

          
        
  

