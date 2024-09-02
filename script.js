const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é o projeto 'Artemis'?",
        alternativas: [
            {
                texto: "É um projeto em desenvolvimento da SpaceX que visa a exploração de Marte",
                afirmacao: "Isso, a NASA está a todo vapor.",
            },
            {
                texto: "É um projeto da NASA que tem o objetivo de levar o homem a lua novamente",
                afirmacao: "Isso, a NASA está a todo vapor.",
            }
        ]
    },
    {
        enunciado: "É da NASA! Esse projeto visa levar o homem a lua novamente, mas qual é o próximo passo?",
        alternativas: [
            {
                texto: "Estabelecermos uma base na lua, para exploramos Marte e ralizar missões nesse planeta",
                afirmacao: "Iremos começar uma nova era da sociedade.",
            },
            {
                texto: "Facilitar e tornar a ida a lua acessível",
                afirmacao: "Iremos começar uma nova era da sociedade.",
            }
        ]
    },
    {
        enunciado: "Vamos para Marte! Além da lua também iremos começar atividades de estudos em Marte. Mas quando esse projeto estará finalizado?",
        alternativas: [
            {
                texto: "Em 2025",
                afirmacao: "E já ira estar finalizado em 2025, pronto paralançamento!",
            },
            {
                texto: "Em 2026",
                afirmacao: "E já ira estar finalizado em 2025, pronto paralançamento!",
            }
        ]
    },
    {
        enunciado: "Ano que vem já! Sim este projeto está quase finalizado. Como será a nossa base na lua?",
        alternativas: [
            {
                texto: "Uma pequena cidade, uma comunidade moderna e tecnológica que visa a sustentabilidade e paz",
                afirmacao: "Em 2049, estaremos muito mais a frente do que imaginamos,",
            },
            {
                texto: "Uma base com serviços básicos, que visa ser sustentável, um centro de pesquisas do Sistema Solar",
                afirmacao: "Em 2049, estaremos muito mais a frente do que imaginamos,",
            }
        ]
    },
    {
        enunciado: "Você está pronto para tudo isso?",
        alternativas: [
            {
                texto: "Sim, claro",
                afirmacao: " esse é apenas o início de uma grande evolução.",
            },
            {
                texto: "Não estou ainda",
                afirmacao: " esse é apenas o início de uma grande evolução.",
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();