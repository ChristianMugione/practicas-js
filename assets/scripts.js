let contadorValor = 0;
var contadorNumero = document.getElementById("contador-numero");
var contadorSuma = document.getElementById("contador-suma");
var contadorResta = document.getElementById("contador-resta");
var contadorReset = document.getElementById("contador-reset");

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