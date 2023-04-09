let cartasViradas = 0;
let par = 0;
let jogadas = 0;
let cartaSelecionadaBack1 = '';
let cartaSelecionadaBack2 = '';
let cartaSelecionadaFront1 = '';
let cartaSelecionadaFront2 = '';

let numeroCartas = prompt('Com quantas cartas deseja jogar? Digite um número entre 4 e 14!'); 
while (numeroCartas%2 !== 0  || numeroCartas < 4 || numeroCartas > 14){
    numeroCartas = prompt('Com quantas cartas deseja jogar? Digite um número entre 4 e 14!');
}



function virarCarta(carta) {
    const carta1 = carta.querySelector(".carta1");
    const carta2 = carta.querySelector(".carta2");
    if (carta2.classList.contains(".back") === false  && cartasViradas === 0){
    carta1.classList.toggle("front");
    carta2.classList.toggle("back");
    cartaSelecionadaFront1 = carta1;
    cartaSelecionadaBack1 = carta2;
    cartasViradas++;
    jogadas++;
    }else if (carta2.classList.contains(".back") === false && cartasViradas === 1){
    carta1.classList.toggle("front");
    carta2.classList.toggle("back");
    cartaSelecionadaFront2 = carta1;
    cartaSelecionadaBack2 = carta2;
    cartasViradas++;
    jogadas++;
    verificaPar();
    }
  }
  

  function verificaPar (){
    if (cartaSelecionadaBack1.querySelector('img').src === cartaSelecionadaBack2.querySelector('img').src){
        par ++;
        cartasViradas = 0;
        if(numeroCartas/2 === par){
            setTimeout(fimJogo, 1000);
        }
    }else if(cartaSelecionadaBack1.querySelector('img').src != cartaSelecionadaBack2.querySelector('img').src){
        setTimeout(notPar,1000);
    }
    
  }

  function fimJogo(){
    alert(`Você ganhou em ${jogadas} jogadas!`);

  }

  function notPar (){
    
        cartaSelecionadaFront1.classList.toggle("front");
        cartaSelecionadaBack1.classList.toggle("back");
        cartaSelecionadaFront2.classList.toggle("front");
        cartaSelecionadaBack2.classList.toggle("back");
        cartasViradas = 0;
    }
 const cardsParrot = [
    "./img/p1.gif",
    "./img/p2.gif",
    "./img/p3.gif",
    "./img/p4.gif",
    "./img/p5.gif",
    "./img/p6.gif",
    "./img/p7.gif"
 ];

 let cardsRandom = [];

 cardsParrot.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
 cardsRandom.sort(comparador);
// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

function random (numeroCartas){
    cardsParrot.sort(comparador);
    for (let i = 0; i < (numeroCartas/2); i++){
        cardsRandom.push(cardsParrot[i]);
        cardsRandom.push(cardsParrot[i]);
    }
    cardsRandom.sort(comparador);
}
random(numeroCartas);

function addCartas (){
    const jogo = document.querySelector('.cards1');
    let cont = 0;
    while (cont < numeroCartas){
        jogo.innerHTML += ` <div data-test="card" onclick ="virarCarta(this)" class="cardCSS">
        <div class ="carta1 face" ><img data-test = "face-down-image" src="./img/back.png"></div>
        <div class ="carta2 back-face face"><img data-test = "face-up-image" src="${cardsRandom[cont]}"></div>
    </div>`;
        cont++;
    }
    }
    addCartas();