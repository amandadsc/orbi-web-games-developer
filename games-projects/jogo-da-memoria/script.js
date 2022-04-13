let order = [];
let clickedOrder = [];
let score = 0;

const som0 = document.getElementById("som0");
const som1 = document.getElementById("som1");
const som2 = document.getElementById("som2");
const som3 = document.getElementById("som3");

/*
0 - verde
1 - vermelho
2 - amarelo
3 - azul
*/

const blue = document.querySelector('.azul');
const red = document.querySelector('.vermelho');
const yellow = document.querySelector('.amarelo');
const green = document.querySelector('.verde');

// Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;

    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250); 

    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

// Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// Função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },400);
   
}

// Função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// Função para próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Função para iniciar o jogo
let playGame = () => {
    alert('Bem Vindo ao Genius! Iniciando novo jogo!');
    score = 0;
    
    nextLevel();
}

// eventos de clique para as cores
green.onclick = () => {
    click(0);
    som0.play();
}

red.onclick = () => {
    click(1);
    som1.play();
}

yellow.onclick = () => {
    click(2);
    som2.play();
}

blue.onclick = () => { 
    click(3);
    som3.play();
}

// Inicio do jogo
playGame();