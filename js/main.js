import { GAME } from "./modules/Juego.js";

// Interface
let disWord = document.getElementById("word");
let disClue = document.getElementById("clue");
let disLive = document.getElementById("lives");
let letterIn = document.getElementById("userCaracter");
let checkBtn = document.getElementById("check");

let partida = new GAME.game("Jugador1");

// Mostramos la palabra oculta
disWord.innerHTML = partida.hidesWord();

// Seteamos la pista de la palabra
disClue.innerHTML = partida.word.pista;

// Seteamos las vidas que tiene
disLive.innerHTML += partida.player.vidas;

// Tests

checkBtn.onclick = function () {
  // Comprobar el intento y Actualizar salidas
  disWord.innerHTML = partida.checkTry(letterIn.value);
};
