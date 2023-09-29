import { GAME } from './game.js';

const NEWGAME = new GAME.game();
const CURRENTLIFEPANEL = document.getElementById("currentLife");
const STARTNEWGAME = document.getElementById("play");
const CURRENTLEVEL = document.getElementById("currentLevel");
const WORD = document.getElementById("word");
const TRYWORD = document.getElementById('tryWord');
const WORDDISPLAY= document.getElementById('word-display');
const RESTART = document.getElementById('restart');


STARTNEWGAME.addEventListener('click', () => {

    NEWGAME.play();
    CURRENTLIFEPANEL.innerHTML = NEWGAME.player.checkLife();
    CURRENTLEVEL.innerHTML = NEWGAME.level.checkCurrentLevel();
    WORDDISPLAY.innerHTML = NEWGAME.words.createUnderscore();
    
    TRYWORD.addEventListener('click', () => {

        NEWGAME.words.compareLetter(WORD.innerHTML);

        if (NEWGAME.player.checkDead()){
            NEWGAME.lose();
        }
        
        
    
    });
    
    RESTART.addEventListener('click', () => {

        NEWGAME.restartGame();
    
    });

});







