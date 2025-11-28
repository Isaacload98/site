const str2 = "A intolerância alimentar ocorre quando o organismo tem dificuldade em digerir certos alimentos, causando desconfortos como dor abdominal, inchaço, náuseas, gases ou até alterações na pele. Diferente da alergia, que envolve o sistema imunológico, a intolerância está ligada principalmente ao processo de digestão — e muitas vezes passa despercebida no dia a dia."
const str1 = "Você sente desconfortos depois de comer determinados alimentos e nunca descobriu o motivo? Talvez seu corpo esteja tentando te avisar! 👉 Faça agora nosso quiz interativo e descubra se você pode ter algum tipo de intolerância alimentar."
const str3 = "É rápido, informativo e pode ser o primeiro passo para entender melhor sua saúde!"
const str4 = "Ao final do quiz, descubra se você possui alguma intolerância! Caso você possua, receba ainda, sugestões personalizadas de substituições alimentares para que o seu organismo e o seu corpo se sintam melhores no dia a dia! VIVA SAUDÁVEL!"
const str5 = ""

const texto1 = document.getElementById("contexto")
const texto2 = document.getElementById("detalhes")
const botao = document.getElementById("botao")
const botao2 = document.getElementById("botao2")
const titulo = document.getElementById("titulo")
const body = document.body
const Bquiz = document.getElementById("botaoQuiz")

let topico = 0
let cor = 0

texto1.textContent = str1
texto2.textContent = str2


botao.onclick = () => {
    if(topico == 1){
        topico = 0
        texto1.textContent = str1
        texto2.textContent = str2
        Bquiz.style.opacity = 0
    }else{
        topico = 1
        texto1.textContent = str3
        texto2.textContent = str4
        Bquiz.style.opacity = 1
    }
}

function clike(){
    if(cor == 1){
        cor = 0
        body.style.backgroundColor = "rgb(40,30,60)"
        texto1.style.color = "white"
        texto2.style.color = "white"
        titulo.style.color = "white"
    }else{
        cor = 1
        body.style.backgroundColor = "rgb(5, 244, 252)"
        texto1.style.color = "black"
        texto2.style.color = "black"
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
