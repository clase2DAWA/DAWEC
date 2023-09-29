import {Player} from "./modules/player.js";
import {Word} from "./modules/word.js";

var GAME = GAME || {};
GAME.wordRandom = new Word();
GAME.secretWord = GAME.wordRandom.wordRandomGet();
GAME.player = new Player();

GAME.game = class Game{
    constructor(){
        this.randomNumber = Math.floor(Math.random() * 11);
    }
    checkWord(userWord){
        if(GAME.player.life > 0){
            if(GAME.secretWord === userWord){
                return "WINNER!!";
            }else{
                GAME.player.deleteLife();
                return "Wrong word, keep trying."
            }
        }else{
            return "YOU LOST";
        }
    }
};

export default GAME.game;