import { Word } from "./modules/word.js";
import { Player } from "./modules/player.js";

class Game {

    constructor() {

        this.playerName = prompt("Enter your user name.");
        this.player = new Player(this.playerName);
        this.word = new Word().word();
        this.arrLetter = this.word.split('');
        this.arrUnderscores = underscores();
        this.arrOcurrences = this.ocurrences();
    }

    showLetter(letter) {
        for (let i = 0; i < this.arrLetter.length; i++) {
            letterUser = letter;
            indice = arrOcurrences[i];
            underscores[indice] = letterUser;
        }
    }
    ocurrences(letter) {
        letters = [];
        position = word.indexOf(letter);
        while (position != -1) {
            letters.push(position);
            position = word.indexOf(letter, position + 1);
        }
        return letters;
    }
    underscores() {
        for (let i = 0; i < this.word.length; i++) {
            this.arrUnderscores.push("_");
        }
    }
};
export {Game};
