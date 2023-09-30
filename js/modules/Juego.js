import { PALABRA } from "./Palabra.js";
import { PLAYER } from "./Jugador.js";

let GAME = {};
GAME.game = class Juego {
  constructor() {
    // Constantes
    this.ERROR = "Esa letra no esta en esta palabra";

    // Atributos
    this.player = new PLAYER.player();
    this.word = new PALABRA.palabra();
    this.arrWord = this.word.palabra.split("");
    this.hideWord = new Array();
    this.lettersTyped = new Array();
  }

  checkTry(letter) {
    let result = false;
    if (this.contains(letter)) {
      this.addLetter(letter);
      result = true;
    }
    return result;
  }

  hidesWord() {
    for (let i = 0; i < this.arrWord.length; i++) {
      this.hideWord[i] = "-";
    }
  }

  // Devuelve la palabra que se esta descubriendo en proceso
  showHideWord() {
    return this.hideWord.join("");
  }

  // En el hideword voy mostrando letra por letra lo que se vaya acertando
  addLetter(letter) {
    for (let i = 0; i < this.hideWord.length; i++) {
      if (this.arrWord[i] == letter.toLowerCase()) {
        this.hideWord[i] = letter.toLowerCase();
      }
    }
  }

  // Ver si la letra que ha probado esta dentro del array de la palabra
  contains(letra) {
    let contain = false;
    for (let i = 0; i < this.arrWord.length; i++) {
      if (this.arrWord[i] == letra.toLowerCase()) {
        contain = true;
      }
    }
    return contain;
  }

  // Comprobar si la palabra esta completa
  acerted() {
    let acerted = true;
    for (let i = 0; i < this.hideWord.length; i++) {
      if (this.hideWord[i] == "-") {
        acerted = false;
      }
    }
    return acerted;
  }

  // Nueva partida
  newGame() {
    this.word.newPalabra();
    this.player = new PLAYER.player();
    this.arrWord = this.word.palabra.split("");
    this.hidesWord();
  }

  // Letters typed
  showLettersTyped(letter) {
    let result = "Ya has usado las letras: ";
    if (!this.lettersTyped.includes(letter)) {
      this.lettersTyped.push(letter);
    }
    result += this.lettersTyped.toString();
    return result;
  }
};

export { GAME };
