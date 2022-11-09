

//Variáveis de estilo de layout
function getLayout(){
    let lista = document.getElementById("lista");
    let mosaico = document.getElementById("mosaico");
    let thumbnails = document.getElementById("thumbs");
    let moslist = document.getElementById("moslist");
    let mosthumb = document.getElementById("mosthumb");
    let statusLine = document.getElementById("status");
    let arrayLayout = [lista, mosaico, thumbnails, moslist, mosthumb];
    let estLayout = "";

    for(let i = 0; i < arrayLayout.length; i++){
        if(arrayLayout[i].value != null && arrayLayout[i].value != undefined && arrayLayout[i].value != "" && arrayLayout[i].checked == true){
            estLayout = arrayLayout[i].value;
        }
    }

    if(estLayout != null && estLayout != undefined && estLayout != ""){
        statusLine.value = `Seu estilo de layout é ${estLayout}`;
        return estLayout
    }else{
        statusLine.value = "Escolha de layout inválida."
        console.log("Escolha de layout inválida");
    }
}

//Ordem de aparição dos vídeos
function getOrder(){
    let data = document.getElementById("date");
    let avaliacao = document.getElementById("Rating");
    let relevancia = document.getElementById("Relevance");
    let titulo = document.getElementById("Title");
    let viewCount = document.getElementById("ViewCount");
    let statusLine = document.getElementById("status");
    let arrayOrder = [data, avaliacao, relevancia, titulo, viewCount];
    let order = "";

    for(let i = 0; i < arrayOrder.length; i++){
        if(arrayOrder[i].value != null && arrayOrder[i].value != undefined && arrayOrder[i].value != "" && arrayOrder[i].checked == true){
            order = arrayOrder[i].value;
        }
    }

    if(order != null && order != undefined && order != ""){
        statusLine.value = `Seu critério de ordenamento é ${order}`;
        console.log(statusLine.value);
        return order
    }else{
        statusLine.value = "Escolha de critério de ordenamento inválida."
        console.log("Escolha de critério de ordenamento inválida.");
    }
}

 function gerarLayout() {

        let espacoPreview = document.getElementById("preview");
        let titRodape = document.getElementById("titRodape").value;
        let numvids = document.getElementById("numero").value;
        let query = document.getElementById("query").value;
        let areaCodigo = document.getElementById("areaCodigo");
        let statusLine = document.getElementById("status");

        let critOrder = getOrder();
        let optLayout = getLayout();

        if(
            titRodape != "" &&  
            query != "" &&  
            numvids != ""  
        ){
            const URL = `http://localhost:3000/gerar-layouts/${optLayout}/${titRodape}/${query}/${numvids}/${critOrder}`;
        
            console.log("Gerando layout...");
        
            let req = new XMLHttpRequest();
            req.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(this.response);
                espacoPreview.innerHTML = this.response;
                areaCodigo.innerText = this.response;
                statusLine.value = "Busca gerada com sucesso!";
            }
            };
            req.open("GET", URL);
            req.setRequestHeader("Content-Type", "text/plain");
            req.send();
        }else{
            statusLine.style.color = "red";
            statusLine.value = "Termine de preencher o formulário! Campos vazios detectados."
            console.log("Termine de preencher o formulário!");
        }
              
    };

    