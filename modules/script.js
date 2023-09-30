import { GAME } from './game.js';

const NEWGAME = new GAME.game();
const CURRENTLIFEPANEL = document.getElementById("currentLife");
const STARTNEWGAME = document.getElementById("play");
const CURRENTLEVEL = document.getElementById("currentLevel");
const WORD = document.getElementById("word");
const TRYWORD = document.getElementById('tryWord');
const WORDDISPLAY= document.getElementById('word-display');
const RESTART = document.getElementById('restart');
const MESSAGEBOX = document.getElementById('word-message')


STARTNEWGAME.addEventListener('click', () => {

    NEWGAME.play();
    checkLife();
    checkCurrentLevel();
    createUnderScore();
    
    
    TRYWORD.addEventListener('click', () => {

        let var1 = WORD.value;
        NEWGAME.words.compareLetter(var1);
        showLetter();
        showMessage();

        if (NEWGAME.words.miss){
            NEWGAME.player.loseLife();
            checkLife();
        }

        if (NEWGAME.player.checkDead()) {

            MESSAGEBOX.innerHTML = NEWGAME.lose();
            showLetter();
            showMessage();
        }

        if (NEWGAME.words.completedWord) {
            

            NEWGAME.nextLevel();
            checkCurrentLevel();
            NEWGAME.player.restartLife();
        }
    });
    
    RESTART.addEventListener('click', () => {

        NEWGAME.restartGame();
    });
});

function showLetter() {

    WORDDISPLAY.innerHTML = NEWGAME.words.checkUnderScore();
}

function showMessage() {

    MESSAGEBOX.innerHTML = NEWGAME.words.checkMessage();
}

function checkCurrentLevel() {

    CURRENTLEVEL.innerHTML = NEWGAME.level.checkCurrentLevel();
}

function checkLife() {

    CURRENTLIFEPANEL.innerHTML = NEWGAME.player.checkLife();
}

function createUnderScore() {

    WORDDISPLAY.innerHTML = NEWGAME.words.createUnderscore();
}






