
    let btn_lista = document.getElementById("Lista");
    let btn_mosaico = document.getElementById("Mosaico");
    let btn_prev = document.getElementById("link-prev");
    let bnt_add_tag = document.getElementById("plus");
    let field_aviso = document.getElementById("aviso");

    let countTag = 1;

    btn_lista.addEventListener('click', function(){
                btn_prev.href = "./lista.html";
    });

    btn_mosaico.addEventListener('click', function(){
                btn_prev.href = "./mosaico.html";
    });

    const criarTag = () => {
        
        if(countTag<=8){ 
            
            let nome_tag = document.getElementById("busca").value;

            let new_tag = document.createElement("button");
            new_tag.type = "button";
            new_tag.id = "tag" + countTag;
            new_tag.innerHTML = nome_tag;
            new_tag.className = "nome";    

            let self_del = document.createElement("img");
            self_del.className = "delete";
            self_del.src = "src/icons8-delete-64.png";
            self_del.onclick = function(){
                new_tag.remove();
                countTag--;
                field_aviso.innerHTML = "";               
            };
        
            document.getElementById("tags2").appendChild(new_tag);
            document.getElementById("tag" + countTag).appendChild(self_del);
            countTag++;
            
        }else{
            field_aviso.innerHTML = "Número máximo de tags alcançada.";
        };

    };

