var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("Samanta")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita(){
    Samanta.style ="display:flex"
    Bruna.style ="display:none"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top: 55px"
}

function RolarParaEsquerda(){
    setaEsquerda.style ="display:none"
    setaDireita.style ="display:flex"
    Bruna.style ="display:flex"
    Samanta.style ="display:none"
}