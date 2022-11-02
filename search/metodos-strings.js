
function tratarTitulo(titulo){
    let titulofinal = "";
    let tamanhotitulo = titulo.length;
    if(tamanhotitulo > 60){
        titulofinal = titulo.slice(0,61) + "...";
        return titulofinal;
    }else{
        titulofinal = titulo;
        return titulofinal
    }
}

function checarDescritivo(descritivo){
    let descritivoFinal = "";
    if(descritivo == "" || descritivo == null || descritivo == undefined){
        descritivoFinal = "Veja mais notícias na TV Jornal.";
        return descritivoFinal;
    }else{
        descritivoFinal = descritivo;
        return descritivoFinal;
    }
}

module.exports = {tratarTitulo, checarDescritivo}