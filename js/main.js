import { GAME } from "./modules/Juego.js";

// Interface
let disWord = document.getElementById("word");
let disClue = document.getElementById("clue");
let disLive = document.getElementById("lives");
let letterIn = document.getElementById("userCaracter");
let checkBtn = document.getElementById("check");
let alimentacion = document.getElementById("retroAlimentacion");
let askNewGame = document.getElementById("newGame");

// Juego
let partida = new GAME.game("Jugador1");

// Ocultar palabra
partida.hidesWord();

// Mostramos la palabra oculta
disWord.innerHTML = partida.showHideWord();

// Seteamos la pista de la palabra
disClue.innerHTML = partida.word.pista;

// Seteamos las vidas que tiene
disLive.innerHTML += partida.player.vidas;

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
      askForLeave();
    }
  }
};

function askForLeave() {
  askNewGame.style.display = "block";
}
