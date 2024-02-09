const perguntas = [
    {
        pergunta: "Qual país ganhou a primeira Copa do Mundo em 1930?",
        respostas: [
            "Brasil",
            "Alemanha",
            "Uruguai",
        ],
        correta: 2
    },
    {
        pergunta: "Qual país ganhou a Copa do Mundo mais vezes?",
        respostas: [
            "Brasil",
            "Argentina",
            "Itália",
        ],
        correta: 0
    },
    {
        pergunta: "Quem marcou o gol mais rápido na história da Copa do Mundo?",
        respostas: [
            "Pele",
            "Hakan Şükür",
            "Diego Maradona",
        ],
        correta: 1
    },
    {
        pergunta: "Qual país sediou a Copa do Mundo de 2006?",
        respostas: [
            "Alemanha",
            "França",
            "África do Sul",
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o maior artilheiro da história das Copas do Mundo?",
        respostas: [
            "Ronaldo",
            "Miroslav Klose",
            "Just Fontaine",
        ],
        correta: 1
    },
    {
        pergunta: "Quem marcou o gol do título na final da Copa do Mundo de 1958?",
        respostas: [
          "Pelé",
          "Vavá",
          "Zito",
        ],
        correta: 0
    },
    {
        pergunta: "Qual jogador marcou o gol da vitória na final da Copa do Mundo de 2002?",
        respostas: [
            "Ronaldo",
            "Rivaldo",
            "Ronaldinho",
        ],
        correta: 0
    },
    {
        pergunta: "Qual país sediou a Copa do Mundo de 2014?",
        respostas: [
            "Brasil",
            "Rússia",
            "Qatar",
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o jogador mais jovem a marcar um gol em uma Copa do Mundo?",
        respostas: [
          "Pele",
          "Diego Maradona",
          "Lionel Messi",
        ],
        correta: 0
    },
    {
        pergunta: "Qual jogador detém o recorde de mais gols em uma única Copa do Mundo?",
        respostas: [
            "Just Fontaine",
            "Gerd Müller",
            "Ronaldo",
        ],
        correta: 0
    },
]


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')


//loop ou laço de repetição
for (const item of perguntas) {

    //Clona todos os nós(tags) que estão no template
    const quizItem = template.content.cloneNode(true)

    //Seleciona o h3 do template de cada clone e nele coloca a respectiva pergunta 
    quizItem.querySelector('h3').textContent = item.pergunta

    //Declara uma variável 'resposta' que receberá os valores das respostas de cada pergunta 
    //O loop 'for' irá "varrer" todos os itens dentro das arrays "Respostas"
    for (let resposta of item.respostas) {

        //Clona todos os nós dentro das tags "dl dt" 
        const dt = quizItem.querySelector("dl dt").cloneNode(true)

        //Seleciona o 'span' dentro da tag 'dt' e atribui a ele o valor de cada resposta a medida que o loop avança.
        dt.querySelector('span').textContent = resposta
        dt.querySelector("input").setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        //Mostra todas as respostas de cada prgunta na tela
        quizItem.querySelector("dl").appendChild(dt)
    }

    //Remove o que está escrito dentro da tag dl>dt: "Resposta A", no caso
    quizItem.querySelector('dl dt').remove()

    //Coloca as perguntas na tela
    quiz.appendChild(quizItem)
}