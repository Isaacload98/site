const str2 = "O empreendedorismo digital emerge como uma das formas mais dinâmicas e acessíveis de iniciar e desenvolver negócios no século XXI. Impulsionado pelo avanço da tecnologia e pela expansão da internet, ele permite que pessoas de diferentes perfis criem soluções inovadoras, alcancem públicos globais e construam marcas fortes com custos iniciais relativamente baixos.Ao contrário dos modelos tradicionais, o empreendedorismo digital não exige, necessariamente, uma estrutura física. Plataformas online possibilitam a venda de produtos, serviços e conteúdos de maneira rápida e escalável. Seja por meio do e-commerce, produção de conteúdo, infoprodutos, marketing digital ou prestação de serviços especializados, os empreendedores encontram no ambiente virtual um terreno fértil para testar ideias, adaptar estratégias e crescer.Outro diferencial está na democratização do conhecimento. Hoje, é possível aprender sobre gestão, vendas, programação, design, tráfego pago e inúmeras outras habilidades essenciais por meio de cursos online, podcasts e comunidades digitais. Isso fortalece o ecossistema empreendedor e estimula a criação de soluções cada vez mais criativas.No entanto, o empreendedorismo digital também traz desafios. A concorrência é intensa, as mudanças tecnológicas são rápidas e o comportamento dos consumidores evolui constantemente. Para prosperar, é necessário manter-se atualizado, dominar ferramentas de análise de dados, desenvolver uma presença online estratégica e cultivar um relacionamento genuíno com o público.Em um mundo cada vez mais conectado, o empreendedorismo digital não é apenas uma tendência, mas uma realidade consolidada. Ele representa liberdade, inovação e a possibilidade de transformar ideias em negócios sustentáveis, ampliando oportunidades e redefinindo a forma como trabalhamos e nos comunicamos."
const str1 = "Empreendedorismo digital:é o que usa a internet como base, como lojas virtuais, aplicativos, influenciadores digitais e startups"
const str3 = "Empreendedorismo social:foca em resolver problemas sociais ou ambientais, mais do que em lucrar. Um exemplo são projetos que ajudam comunidades carentes ou promovem sustentabilidade."
const str4 = "O empreendedorismo social surge como uma alternativa poderosa para enfrentar desafios sociais, ambientais e econômicos de forma inovadora e sustentável. Diferente do modelo tradicional, cujo foco principal está no lucro, o empreendedorismo social busca gerar impacto positivo na sociedade, colocando o bem-estar coletivo no centro de suas ações.Empreendedores sociais identificam problemas como desigualdade, fome, falta de acesso à educação, saúde e saneamento, entre outros, e desenvolvem soluções criativas que promovem mudanças reais nas comunidades. Essas iniciativas podem assumir várias formas: negócios de impacto, organizações sem fins lucrativos, startups sociais, cooperativas ou projetos comunitários.Um dos pilares desse modelo é a sustentabilidade. Isso significa criar soluções que não dependam exclusivamente de doações, mas que sejam financeiramente viáveis e capazes de manter suas atividades a longo prazo. Assim, o empreendedor social combina propósito com estratégia, empatia com gestão e sensibilidade com inovação.A tecnologia também desempenha um papel essencial ao facilitar o acesso a recursos, ampliar o alcance das iniciativas e melhorar a eficiência das ações. Plataformas digitais, aplicativos e redes de colaboração têm se tornado ferramentas importantes para conectar causas, voluntários e apoiadores.No entanto, empreender socialmente exige dedicação, resiliência e um profundo entendimento das necessidades das comunidades atendidas. O impacto não ocorre de forma imediata: ele envolve processos contínuos, diálogo e construção coletiva.Em um mundo que enfrenta desafios cada vez mais complexos, o empreendedorismo social representa uma possibilidade concreta de promover mudanças estruturais e melhorar vidas. Ele inspira novas formas de pensar e agir, mostrando que é possível empreender com propósito e transformar realidades."

const texto1 = document.getElementById("contexto")
const texto2 = document.getElementById("detalhes")
const botao = document.getElementById("botao")
const botao2 = document.getElementById("botao2")
const titulo = document.getElementById("titulo")
const body = document.body

let topico = 0
let cor = 0

texto1.textContent = str1
texto2.textContent = str2


botao.onclick = () => {
    if(topico == 1){
        topico = 0
        texto1.textContent = str1
        texto2.textContent = str2
    }else{
        topico = 1
        texto1.textContent = str3
        texto2.textContent = str4
    }
    
}

botao2.onclick = () => {
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