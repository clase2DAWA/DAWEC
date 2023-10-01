import { Word } from "./word.js";
import { Player } from "./player.js";

let word = new Word().randomWord;
let letter2 = new Player().letter;

console.log(word);
console.log(letter2);

export let Game = class Game {
    constructor() {
        this.word = new Word().randomWord();
        this.player = new Player();
        this.lives = 10;
        this.gameOver = false;
    }

    init() {
        const sizeLenght = document.getElementById("word");
        let displayWord = "";
        for (let index = 0; index < this.word.length; index++) {
            wordDisplay += "_";            
        }
        sizeLenght.textContent = displayWord;
    }

    correctLetter() {
        const theletter = this.player.letter;

        if(this.gameOver){
            return "GAME OVER";
        }

        const thisLetter = this.player.letter;

        if (!this.word.includes(thisLetter)) {
            this.lives--;
        } else if (this.lives <= 0) {
            this.gameOver = true;
            return "You lost..." + " the word was: " + this.word;
        } else if(!this.word.includes("_")) {
            this.gameOver = true;
            return "¡CONGRATULATIONS, YOU WIN!";
        }
        return "Continues to play" + this.word;
    }

}