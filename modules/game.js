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

    play() {
        

    }

    restartGame() {

        return this.level.restartGame();

    }

    win() {

        return this.level.maxLevel()
            ? "You have won the game. Are you happy?"
            : undefined;
    }

    lose() {

    }

    nextLevel() {

        return this.level.nextLevel();

    }

}

export { GAME };