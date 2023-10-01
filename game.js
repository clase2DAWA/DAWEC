import Word from "./word.js";

class Game {
    constructor() {
        this.wordInstance = new Word();
        this.word = this.wordInstance.randomWord().toUpperCase().split('');
        this.elementWord = document.getElementById("hiddenWord");
    }

    play() {
        // Saco la palabra aleatoria y divido sus caracteres y los meto en un array
        for (let index = 0; index < this.word.length; index++) {
            this.elementWord.textContent += "_";
        }
    }

    load(letter) {
        // Encuentra todas las posiciones en las que aparece la letra en 'word'
        const positions = [];
        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] === letter) {
                positions.push(i);
            }
        }

        // Actualiza 'this.elementWord.textContent' para mostrar la letra en las posiciones encontradas
        const wordArray = this.elementWord.textContent.split('');
        for (const index of positions) {
            wordArray[index] = letter;
        }
        this.elementWord.textContent = wordArray.join('');
    }
}
const wordInstance = new Word();
export default Game;