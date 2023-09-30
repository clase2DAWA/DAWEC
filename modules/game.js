import { Word } from "./word.js";
import { Player } from "./player.js";

class Game {

    constructor() {

        // this.playerName = prompt("Enter your user name.");
        this.player = new Player(this.playerName);
        this.word = new Word().word();
        this.arrLetter = this.word.split('');
    }

    showLetter(letter) {
        for (let i = 0; i < this.arrLetter.length; i++) {
            let letterUser = letter;
            let indice = this.arrOcurrences[i];
            this.arrUnderscores[indice] = letterUser;
        }
    }
    underscores(){  
        let underscores = [];  
            for (let i = 0; i < this.word.length; i++) {
                underscores.push("_");
            }  
            return underscores;
    }
    ocurrences(letter) {
        let letters = [];
        let position = this.word.indexOf(letter);
        while (position != -1) {
            letters.push(position);
            position = word.indexOf(letter, position + 1);
        }
        return letters;
    }
};
export { Game };
