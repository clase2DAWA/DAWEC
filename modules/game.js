import { LEVELS } from './levels';
import { WORDS } from "./words";
import { PLAYER } from "./player";

var GAME = GAME || {};
GAME.game = class {

    constructor () {

        this.player = new PLAYER.player;
        this.level = new LEVELS.level;
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