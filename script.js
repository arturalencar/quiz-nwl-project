const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para se referir a um script externo chamado 'xxx.js'?",
        respostas: [
            "<script href='xxx.js'>",
            "<script name='xxx.js'>",
            "<script src='xxx.js'>",
        ],
        correta: 2
    },
    {
        pergunta: "Como você escreve 'Hello World' em uma caixa de alerta?",
        respostas: [
            "msgBox('Hello World');",
            "alertBox('Hello World');",
            "alert('Hello World');",
        ],
        correta: 2
    },
    {
        pergunta: "Como você cria uma função em JavaScript?",
        respostas: [
            "function myFunction()",
            "function = myFunction()",
            "function:myFunction()",
        ],
        correta: 0
    },
    {
        pergunta: "Como você chama uma função chamada 'myFunction'?",
        respostas: [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()",
        ],
        correta: 2
    },
    {
        pergunta: "Como escrever um IF em JavaScript?",
        respostas: [
            "if i = 5 then",
            "if i == 5 then",
            "if (i == 5)",
        ],
        correta: 2
    },
    {
        pergunta: "Como um loop WHILE é escrito em JavaScript?",
        respostas: [
            "while (i <= 10; i++)",
            "while i = 1 to 10",
            "while (i <= 10)",
        ],
        correta: 2
    },
    {
        pergunta: "Como você comenta uma linha em JavaScript?",
        respostas: [
            "//This comment",
            "/*This comment",
            "'This comment",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de escrever um array em JavaScript?",
        respostas: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = 'red', 'green', 'blue'",
            "var colors = ['red', 'green', 'blue']",
        ],
        correta: 2
    },
    {
        pergunta: "Qual operador é usado para atribuir um valor a uma variável?",
        respostas: [
            "*",
            "-",
            "=",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a sintaxe correta para se referir a um elemento HTML em JavaScript?",
        respostas: [
            "document.getElement('p')",
            "document.getElementById('p')",
            "$(p)",
        ],
        correta: 1
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