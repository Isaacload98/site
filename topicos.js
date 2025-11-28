const str2 = ""
const str1 = ""
const str3 = ""
const str4 = ""
const str5 = ""

const texto1 = document.getElementById("contexto")
const texto2 = document.getElementById("detalhes")
const texto3 = document.getElementById("3")
const texto4 = document.getElementById("4")
const botao = document.getElementById("botao")
const botao2 = document.getElementById("botao2")
const titulo = document.getElementById("titulo")
const body = document.body
const Bquiz = document.getElementById("botaoQuiz")

let topico = 0
let cor = 0

function clike(){
    if(cor == 1){
        cor = 0
        body.style.backgroundColor = "rgb(40,30,60)"
        texto1.style.color = "white"
        texto2.style.color = "white"
        texto3.style.color = "white"
        texto4.style.color = "white"
        titulo.style.color = "white"
    }else{
        cor = 1
        body.style.backgroundColor = "rgb(5, 244, 252)"
        texto1.style.color = "black"
        texto2.style.color = "black"
        texto3.style.color = "black"
        texto4.style.color = "black"
        titulo.style.color = "black"
    }
}

clike()

botao2.onclick = () => {
    clike()
}

Bquiz.onclick = () => {
    window.location.href = "teste.html"
}
