import { LEVELS } from './levels.js';
import { WORDS } from "./words.js";
import { PLAYER } from "./player.js";

var GAME = GAME || {};
GAME.game = class {

    constructor () {

        this.player = new PLAYER.player;
        this.level = new LEVELS.levels;
        this.words = new WORDS.words;
    }

    lose() {

        this.words.msg = "You Lost! Are you happy?";
    }

    playRestartGame() {
        
        this.words.createWord()
        this.level.restartLevel();
        this.player.restartLife();
    }

    nextLevel() {

        this.words.createWord();
        this.level.nextLevel();
        this.player.restartLife();
    }

    win() {

        this.words.msg = "You have won the game. Are you happy?"
    }
}

export { GAME };