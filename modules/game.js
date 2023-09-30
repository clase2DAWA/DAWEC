import { Word } from "./word.js";
import { Player } from "./player.js";

class Game {

    constructor() {
        this.name = "vito";
        this.word = new Word().word();
        this.player = new Player(this.name);
        this.arrCharactWord = this.word.split('');
        this.arrUndercores = [];
        this.arrOcurrences = [];
        this.useLetters = [];

    };
    undercores() {
        for (let i = 0; i < this.word.length; i++) {
            this.arrUndercores.push("_");
        }
    };
    ocurrences(letter) {
        let position = this.word.indexOf(letter);
        while (position != -1) {
            this.arrOcurrences.push(position);
            position = this.word.indexOf(letter, position + 1);
        }
    };
    remplace(letter) {
        let index = this.arrCharactWord.indexOf[letter];
        while (index != -1) {
            this.arrUndercores[index] = letter;
            index = this.arrCharactWord.indexOf(letter, index + 1);
        }
    }

};
export { Game };
