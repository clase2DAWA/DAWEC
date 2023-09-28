import { PALABRA } from "./Palabra.js";
import { PLAYER } from "./Jugador.js";

let GAME = {};
GAME.game = class Juego {
  constructor(playerName) {
    this.player = new PLAYER.player(playerName);
    this.word = new PALABRA.palabra();
    this.arrWord = this.word.palabra.split("");
    this.hideWord = new Array();
  }

  checkTry(letter) {
    if (this.contains(letter)) {
      this.showLetter(letter);
    }
    return this.hideWord.join("");
  }

  hidesWord() {
    for (let i = 0; i < this.arrWord.length; i++) {
      this.hideWord[i] = "-";
    }
    return this.hideWord.join("");
  }

  // En el hideword voy mostrando letra por letra lo que se vaya acertando
  showLetter(letter) {
    for (let i = 0; i < this.hideWord.length; i++) {
      if (this.arrWord[i] == letter) {
        this.hideWord[i] = letter;
      }
    }
  }

  // Ver si la letra que ha probado esta dentro del array de la palabra
  contains(letra) {
    let contain = false;
    for (let i = 0; i < this.arrWord.length; i++) {
      if (this.arrWord[i] == letra) {
        contain = true;
      }
    }
    return contain;
  }
};

export { GAME };
