import Game from "./game.js";
import Player from "./player.js";

var HANGMAN = HANGMAN || {};

HANGMAN.Game = new Game;
HANGMAN.Player = new Player(HANGMAN.Game);

// Creo la instancia de Game y ejecuto todos los metodos
HANGMAN.Game.play();

// Creo la instancia de Player y ejecuto el metodo pressedLetter para activar el Action Listener
HANGMAN.Player.pressedLetter();