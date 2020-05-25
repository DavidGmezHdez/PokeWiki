
function colorTipo1(){
    var tipo = document.getElementById("tipo1")
    console.log(tipo);
    if(tipo.innerHTML == "groudn")tipo.style.background = "#9eb7b8"
    if(tipo.innerHTML == "water")tipo.style.background = "#4592c4"
    if(tipo.innerHTML == "bug")tipo.style.background = "#729f3f"
    if(tipo.innerHTML == "dragon")tipo.style.background = "rgb(88, 0, 202)"
    if(tipo.innerHTML == "electric")tipo.style.background = "#eed535"
    if(tipo.innerHTML == "ghost")tipo.style.background = "#7b62a3"
    if(tipo.innerHTML == "fire")tipo.style.background = "#fd7d24"
    if(tipo.innerHTML == "fairy")tipo.style.background = "#fdb9e9"
    if(tipo.innerHTML == "ice")tipo.style.background = "#51c4e7"
    if(tipo.innerHTML == "fight")tipo.style.background = "#d56723"
    if(tipo.innerHTML == "normal")tipo.style.background = "#a4acaf"
    if(tipo.innerHTML == "grass")tipo.style.background = "#9bcc50"
    if(tipo.innerHTML == "Psiquico")tipo.style.background = "#f366b9"
    if(tipo.innerHTML == "Roca")tipo.style.background = "#a38c21"
    if(tipo.innerHTML == "Siniestro")tipo.style.background = "#707070"
    if(tipo.innerHTML == "Tierra")tipo.style.background = "#ab9842 "
    if(tipo.innerHTML == "Veneno")tipo.style.background = "#b97fc9"
    if(tipo.innerHTML == "Volador")tipo.style.background = "#3dc7ef"
}

function colorTipo2(){
    var tipo = document.getElementById("tipo2")
    if(tipo.innerHTML == "")tipo.style.display="none"
}
