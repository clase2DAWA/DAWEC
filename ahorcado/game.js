import { Word } from "./word.js";

export let Game = class Game {
    constructor() {
        this.word = new Word().randomWord();
        this.lives = 10;
        this.gameOver = false;
        this.displayWord = "";
    }

    init() {
        const wordElement = document.getElementById("word");
        for (let index = 0; index < this.word.length; index++) {
            this.displayWord += "_";
        }
        wordElement.textContent = this.displayWord;
    }


    correctLetter(letter) {
        const theletter = letter;

        if (this.gameOver) {
            return "GAME OVER";
        }

        const thisLetter = letter;

        if (!this.word.includes(thisLetter)) {
            this.lives--;
        } else if (this.lives <= 0) {
            this.gameOver = true;
            return "You lost..." + " the word was: " + this.word;
        } else if (!this.word.includes("_")) {
            this.gameOver = true;
            return "¡CONGRATULATIONS, YOU WIN!";
        }
        return "Continues to play" + this.word;
    }

    refresh(letter) {
        const wordElement = document.getElementById("word");

        if (this.gameOver) {
            return;
        }

        if (this.word.includes(letter)) {
            const wordArray = this.displayWord.split('');

            for (let index = 0; index < this.word.length; index++) {
                if (this.word[index] === letter) {
                    wordArray[index] = letter;
                }
            }

            this.displayWord = wordArray.join('');
            wordElement.textContent = this.displayWord;

            if (!this.displayWord.includes('_')) {
                this.gameOver = true;
            }
        }
    }
}

