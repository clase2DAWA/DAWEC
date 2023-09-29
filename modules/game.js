import {Player} from "./player.js";
import {Word} from "./word.js";

export class Game{
    constructor(){
        this.player = new Player();
        this.word = new Word();
    }
    checkWord(userLetter){
        if (typeof userLetter === "string") {
            userLetter = userLetter.toLowerCase();
        }
        if(this.player.life > 0){
            if(this.word.guessLetter(userLetter)){
                if (this.word.finishWord()) {
                    return "YOU WINNER!!!";
                } else {
                    return `You guess the letter: ${this.word.getGuessLetter()}`;
                }
            }else{
                this.player.checkLife();
                return `You wrong the letter. You have ${this.player.getCheckLife()}`;
            }
        }else{
            return `YOU LOST!! The word is ${this.word.getWord()}`;
        }   
    }
};

