import { Word } from "./word.js";
import { Player } from "./player.js";

class Game {

    constructor() {
        this.name = "vito";
        this.word = new Word().word();
        this.player = new Player(name);
        this.arrWord = this.word.split('');
        this.secretWord = this.word
        this.arrUndercores = [];
        this.arrLetters = [];
    };
    undercores(){
        for (let i = 0; i < this.word.length; i++) {
            this.arrUndercores.push("_");
        } 
    };
    ocurrences(letter) {
        let position = this.word.indexOf(letter);
        while (position != -1) {
            this.arrLetters.push(position);
            position = this.word.indexOf(letter, position + 1);
        }
    };

};
export { Game };
