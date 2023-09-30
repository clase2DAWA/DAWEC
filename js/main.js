import { GAME } from "./modules/Juego.js";

// Interface
let disWord = document.getElementById("word");
let disClue = document.getElementById("clue");
let disLive = document.getElementById("lives");
let letterIn = document.getElementById("userCaracter");
let checkBtn = document.getElementById("check");
let alimentacion = document.getElementById("retroAlimentacion");
let askNewGame = document.getElementById("newGame");
let noBtn = document.getElementById("no");
let yesBtn = document.getElementById("yes");
let disLettersTyped = document.getElementById("lettersTyped");

// Juego
let partida = new GAME.game();

// Ocultar palabra
partida.hidesWord();

// ARRANCAMOS EL JUEGO
startGame();

// Tests

checkBtn.onclick = function () {
  // Comprobar el intento y Actualizar salidas
  if (partida.checkTry(letterIn.value)) {
    disWord.innerHTML = partida.showHideWord();
    if (partida.acerted()) {
      alimentacion.innerHTML = "HAS GANAO PRIMO";
      askForLeave();
    }
  } else {
    alimentacion.innerHTML = partida.ERROR;
    disLive.innerHTML = "Tus vidas: " + partida.player.restarVida();
    if (partida.player.vidas < 1) {
      alimentacion.innerHTML = "HAS PERDIDO PISHA";
      disWord.innerHTML = partida.word.palabra;
      askForLeave();
    }
  }
  disLettersTyped.innerHTML = partida.showLettersTyped(
    letterIn.value.toLowerCase()
  );
};

letterIn.onfocus = function () {
  letterIn.value = "";
};

function askForLeave() {
  askNewGame.style.display = "block";
  letterIn.disabled = true;
  checkBtn.disabled = true;
}

function startGame() {
  // Mostramos la palabra oculta
  disWord.innerHTML = partida.showHideWord();

  // Seteamos la pista de la palabra
  disClue.innerHTML = partida.word.pista;

  // Seteamos las vidas que tiene
  disLive.innerHTML += partida.player.vidas;

  // Comprobaciones
  askNewGame.style.display = "none";
  letterIn.disabled = false;
  checkBtn.disabled = false;
}

noBtn.onclick = function () {
  window.close();
};

yesBtn.onclick = function () {
  partida.newGame();
  startGame();
};
