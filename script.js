const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tá no ônibus e acena achando que viu um amigo, mas percebe que não era ninguém conhecido. O que faz?",
        alternativas: [
            {
                texto: "Finge que tava espantando um mosquito.",
                afirmacao: "Virou mestre em transformar vergonha em arte performática. "
            },
            {
                texto: "Mantém o aceno e sorri como se fosse candidato a vereador.",
                afirmacao: "Criou uma nova personalidade pública e agora dá tchau até pro poste. "
            }
        ]
    },
    {
        enunciado: "Você tenta dar aquele disfarce depois de tropeçar na rua sozinho. Qual a sua tática?",
        alternativas: [
            {
                texto: "Olha pro chão com raiva, como se tivesse tropeçado numa armadilha.",
                afirmacao: "Descobriu que o asfalto às vezes é o verdadeiro vilão do cotidiano. "
            },
            {
                texto: "Começa a correr fingindo que era parte de um treino.",
                afirmacao: "Virou atleta por 3 segundos pra preservar a dignidade. "
            }
        ]
    },
    {
        enunciado: "Você manda um áudio reclamando da aula... para o grupo da turma com o professor incluso. E agora?",
        alternativas: [
            {
                texto: "Finge que era um personagem falando.",
                afirmacao: "Criou uma carreira de dublador na base do desespero. "
            },
            {
                texto: "Manda um meme logo em seguida e torce pra virar piada.",
                afirmacao: "Transformou o desastre em conteúdo compartilhável. "
            }
        ]
    },
    {
        enunciado: "Você vai tirar uma foto com o crush e sem querer abre a câmera frontal invertida. Reação?",
        alternativas: [
            {
                texto: "Faz cara de modelo mesmo assim e segue o jogo.",
                afirmacao: "Entendeu que atitude vence ângulo. "
            },
            {
                texto: "Joga o celular no chão e diz que foi um bug do sistema.",
                afirmacao: "Levou o bug como desculpa oficial da autoestima em baixa. "
            }
        ]
    },
    {
        enunciado: "Você está sozinho em casa e dá um show cantando. Quando termina, percebe que deixou a janela aberta. O que faz?",
        alternativas: [
            {
                texto: "Agradece o público invisível com reverência.",
                afirmacao: "Transformou a vergonha em espetáculo e virou lenda no bairro. "
            },
            {
                texto: "Finge que era karaokê educativo pro cachorro.",
                afirmacao: "Agora oficialmente o cantor oficial das manhãs domésticas. "
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
    caixaPerguntas.textContent = "Sua jornada de vida cotidiana chegou ao fim!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
