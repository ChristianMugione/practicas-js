let contadorValor = 0;
const contadorNumero = document.getElementById("contador-numero");
const contadorSuma = document.getElementById("contador-suma");
const contadorResta = document.getElementById("contador-resta");
const contadorReset = document.getElementById("contador-reset");

contadorSuma.addEventListener("click", contadorSumar, false);
contadorResta.addEventListener("click", contadorRestar, false);
contadorReset.addEventListener("click", contadorResetear, false)

function contadorSumar() {
  contadorValor++;
  contadorNumero.firstChild.nodeValue = contadorValor;
}

function contadorRestar() {
  contadorValor--;
  contadorNumero.firstChild.nodeValue = contadorValor;
}

function contadorResetear() {
  contadorValor = 0;
  contadorNumero.firstChild.nodeValue = contadorValor;
}

// Ta Te Ti

let jugador = "X";
let enJuego = 0;
let tableroTaTeTi = ["","","","","","","","",""];
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const tttTurno = document.getElementById("tateti-turno");
const tatetiReset = document.getElementById("tateti-reset");
a1.addEventListener("click", clickA1, false);
a2.addEventListener("click", clickA2, false);
a3.addEventListener("click", clickA3, false);
b1.addEventListener("click", clickB1, false);
b2.addEventListener("click", clickB2, false);
b3.addEventListener("click", clickB3, false);
c1.addEventListener("click", clickC1, false);
c2.addEventListener("click", clickC2, false);
c3.addEventListener("click", clickC3, false);


function imprimirTablero() {
  a1.firstChild.nodeValue=tableroTaTeTi[0];
  b1.firstChild.nodeValue=tableroTaTeTi[1];
  c1.firstChild.nodeValue=tableroTaTeTi[2];
  a2.firstChild.nodeValue=tableroTaTeTi[3];
  b2.firstChild.nodeValue=tableroTaTeTi[4];
  c2.firstChild.nodeValue=tableroTaTeTi[5];
  a3.firstChild.nodeValue=tableroTaTeTi[6];
  b3.firstChild.nodeValue=tableroTaTeTi[7];
  c3.firstChild.nodeValue=tableroTaTeTi[8];
  tttTurno.firstChild.nodeValue=jugador;
}
imprimirTablero();

tatetiReset.addEventListener("click", resetTateti, false);

if (enJuego == 0) {
  tatetiReset.firstChild.nodeValue = "Iniciar";
  
}

function resetTateti() {
  tableroTaTeTi = ["", "", "", "", "", "", "", "", ""];
  jugador = "X";
  imprimirTablero();
  mensaje.innerHTML = "";
  // mensaje.firstChild.nodeValue = "-";
  enJuego = 1;
  tatetiReset.firstChild.nodeValue = "Reset";
  tttTurno.firstChild.nodeValue = jugador;
}

function cambiarJugador() {
  if (enJuego == 1) {
    if (jugador == "X") {
      jugador = "O";
    } else {
      jugador = "X";
    }
  }
}
function finPartida() {
  cambiarJugador();
  elQueGano = jugador;
  mensaje.innerHTML = "Ganador: " + elQueGano;
  tttTurno.innerHTML = "-";
  enJuego = 0;
}
function ganador(quienGana) {
  if (tableroTaTeTi[0] == tableroTaTeTi[1] && tableroTaTeTi[1] == tableroTaTeTi[2] && tableroTaTeTi[1] != "") {
    finPartida()
  } 
  if (tableroTaTeTi[3] == tableroTaTeTi[4] && tableroTaTeTi[4] == tableroTaTeTi[5] && tableroTaTeTi[5] != "") {
    finPartida()
  }
  if (tableroTaTeTi[6] == tableroTaTeTi[7] && tableroTaTeTi[7] == tableroTaTeTi[8] && tableroTaTeTi[8] != "") {
    finPartida()
  }
  if (tableroTaTeTi[0] == tableroTaTeTi[3] && tableroTaTeTi[3] == tableroTaTeTi[6] && tableroTaTeTi[6] != "") {
    finPartida()
  }
  if (tableroTaTeTi[1] == tableroTaTeTi[4] && tableroTaTeTi[4] == tableroTaTeTi[7] && tableroTaTeTi[7] != "") {
    finPartida()
  }
  if (tableroTaTeTi[2] == tableroTaTeTi[5] && tableroTaTeTi[5] == tableroTaTeTi[8] && tableroTaTeTi[8] != "") {
    finPartida()
  } 
  if (tableroTaTeTi[0] == tableroTaTeTi[4] && tableroTaTeTi[4] == tableroTaTeTi[8] && tableroTaTeTi[8] != "") {
    finPartida()
  } 
  if (tableroTaTeTi[2] == tableroTaTeTi[4] && tableroTaTeTi[4] == tableroTaTeTi[6] && tableroTaTeTi[6] != "") {
    finPartida()
  }
}
// Teclas Jugadas
function clickA1() {
  if (tableroTaTeTi[0] == "" && enJuego == 1) {
    tableroTaTeTi[0] = jugador;
    cambiarJugador();
  } 
  imprimirTablero();
  ganador();
}
function clickB1() {
  if (tableroTaTeTi[1] == "" && enJuego == 1) {
    tableroTaTeTi[1] = jugador;
    cambiarJugador();
  }
  imprimirTablero();
  ganador();
}
function clickC1() {
  if (tableroTaTeTi[2] == "" && enJuego == 1) {
    tableroTaTeTi[2] = jugador;
    cambiarJugador();
  }
  imprimirTablero();
  ganador();
}
function clickA2() {
  if (tableroTaTeTi[3] == "" && enJuego == 1) {
    tableroTaTeTi[3] = jugador;
    cambiarJugador();
  }
  imprimirTablero();
  ganador();
}
function clickB2() {
  if (tableroTaTeTi[4] == "" && enJuego == 1) {
    tableroTaTeTi[4] = jugador;
    cambiarJugador();
  }
  imprimirTablero();
  ganador();
}
function clickC2() {
  if (tableroTaTeTi[5] == "" && enJuego == 1) {
    tableroTaTeTi[5] = jugador;
    cambiarJugador();
  }
  imprimirTablero();
  ganador();
}
function clickA3() {
  if (tableroTaTeTi[6] == "" && enJuego == 1) {
    tableroTaTeTi[6] = jugador;
    cambiarJugador();
  }
  imprimirTablero();
  ganador();
}
function clickB3() {
  if (tableroTaTeTi[7] == "" && enJuego == 1) {
    tableroTaTeTi[7] = jugador;
    cambiarJugador();
  }
  imprimirTablero();
  ganador();
}
function clickC3() {
  if (tableroTaTeTi[8] == "" && enJuego == 1) {
    tableroTaTeTi[8] = jugador;
    cambiarJugador();
  }
  imprimirTablero();
  ganador();
}

// posibilidad de empate!!!!
///////////////////////////////

// Piedra, Papel o Tijera
const tocoPiedra = document.getElementById("piedra");
const tocoPapel = document.getElementById("papel");
const tocoTijera = document.getElementById("tijera");
const pptGanador = document.getElementById("ppt-ganador");
const pptImg = document.getElementById("ppt-img");
tocoPiedra.addEventListener("click", clickPiedra, false);
tocoPapel.addEventListener("click", clickPapel, false);
tocoTijera.addEventListener("click", clickTijera, false);

function botRandom() {
  botDiceNum = Math.floor(Math.random() * 3);
  switch (botDiceNum) {
    case 0:
      return "piedra";
      break;
    case 1:
      return "papel";
      break;
    case 2:
      return "tijera";
      break;
  }
}

function clickPiedra() {
  jugadaBot = botRandom();
  if (jugadaBot == "piedra"){
    pptImg.src = "./img/piedra.png";
    pptResult = "EMPATAMOS";
  } else if (jugadaBot == "papel") {
    pptImg.src = "./img/papel.png";
    pptResult = "GANÉ YO";
  } else {
    pptImg.src = "./img/tijeras.png";
    pptResult = "ME GANASTE";
  }
  pptGanador.innerHTML = "Vos jugaste piedra<br>Yo jugué " + jugadaBot + "<br>" + pptResult;
}

function clickPapel() {
  jugadaBot = botRandom();
  if (jugadaBot == "piedra"){
    pptImg.src = "./img/piedra.png";
    pptResult = "ME GANASTE";
  } else if (jugadaBot == "papel") {
    pptImg.src = "./img/papel.png";
    pptResult = "EMPATAMOS";
  } else {
    pptImg.src = "./img/tijeras.png";
    pptResult = "GANÉ YO";
  }
  pptGanador.innerHTML = "Vos jugaste papel<br>Yo jugué " + jugadaBot + "<br>" + pptResult;
}

function clickTijera() {
  jugadaBot = botRandom();
  if (jugadaBot == "piedra"){
    pptImg.src = "./img/piedra.png";
    pptResult = "GANÉ YO";
  } else if (jugadaBot == "papel") {
    pptImg.src = "./img/papel.png";
    pptResult = "ME GANASTE";
  } else {
    pptImg.src = "./img/tijeras.png";
    pptResult = "EMPATAMOS";
  }
  pptGanador.innerHTML = "Vos jugaste tijeras<br>Yo jugué " + jugadaBot + "<br>" + pptResult;
}

let arr = [0 , 0 , 0];
arr[1]=1;
arr[1]=arr[1]+1;
arr[1]++;
let pedo=2;
arr[pedo]=1;
for (let i; i < 100; i++) {
  let aleatorio = Math.floor(Math.random() * 3);  
  arr[aleatorio]++;
  console.log(i);
}
