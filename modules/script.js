import { GAME } from './game.js';

const NEWGAME = new GAME.game();
const CURRENTLIFEPANEL = document.getElementById("currentLife");
const STARTNEWGAME = document.getElementById("play");
const CURRENTLEVEL = document.getElementById("currentLevel");
const WORD = document.getElementById("word");
const TRYWORD = document.getElementById('tryword');
const WORDDISPLAY= document.getElementById('word-display');
const RESTART = document.getElementById('restart');


STARTNEWGAME.addEventListener('click', () => {

    CURRENTLIFEPANEL.innerHTML = NEWGAME.player.checkLife();
    CURRENTLEVEL.innerHTML = NEWGAME.level.checkCurrentLevel();
    WORDDISPLAY.innerHTML = NEWGAME.words.checkCurrentWord();
    
    RESTART.addEventListener('click', () => {

        NEWGAME.restartGame();
    
    });

    TRYWORD.addEventListener('click', () => {

    compareLetter(word.innerHTML);

});

});







