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
        this.usedLetters = [];


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
    compareArr(){
        let arr1 = this.arrCharactWord;
        let arr2 = this.arrUndercores;
        let distint = 0;
        for (let i = 0; i < arr1.length; i++) {
            if(arr1[i] != arr2[i]){
                distint++;
            }
        }
        return distint;
    }
    letterUsed(letter){
        this.usedLetters.push(letter);
    }
    countLetterUsed(letter){
        let position = this.usedLetters.indexOf(letter);
        let count = 0;
        while (position != -1) {
            count++;
            position = this.usedLetters.indexOf(letter, position + 1);
        }
        return count;
    }
    
    

};
export { Game };
