
    let btn_lista = document.getElementById("lista");
    let btn_mosaico = document.getElementById("mosaico");
    let btn_thumbs = document.getElementById("thumbs");
    let btn_prev = document.getElementById("link-prev");
    let bnt_add_tag = document.getElementById("plus");
    let bnt_res_tag = document.getElementById("res-tags");
    var field_aviso = document.getElementById("aviso_tags");
    let tagsVars = [];

    // Contagem de Tags
    var countTag = 1;
    field_aviso.innerHTML = countTag-1 + " /8 tags adicionadas."

    //Urls de acordo com o tipo de Organização(a revisar, funcionou na primeira pagina de tags, agora parou de funcionar)
    btn_lista.addEventListener('click', function(){
                btn_prev.href = "./index-materia-lista.html";
    });

    btn_mosaico.addEventListener('click', function(){
                btn_prev.href = "./index-materia.html";
    });

    btn_thumbs.addEventListener('click', function(){
                btn_prev.href = "./index-materia-thumbs.html";
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

        if(countTag >1){
            for(let i = 1; i<=8; i++){
                let pillTag = document.getElementById("tag" + i);
                pillTag.remove();
            }

            countTag = 1;
            field_aviso.innerHTML = countTag -1 + " /8 tags adicionadas."
        }
    }

    
    //Função para gerar código com o botão a partir de Tags, datas e organização.
    function gerarCodigo(){

       /*  {
            'apiKey': ""
        } */

        let videoURLs = []; 
        let youtubeTags = [];

            function compTags(tag) {
                for(i = 0; i < compTags.length; i++){
                    if(tagsVars[i] == youtubeTags[i]){
                        //GetURL();
                    }
                }
            }

        tagsVars.forEach(compTags);

        
    }

