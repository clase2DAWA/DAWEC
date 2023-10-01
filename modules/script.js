import { GAME } from './game.js';

const NEWGAME = new GAME.game();
const CURRENTLIFEPANEL = document.getElementById("currentLife");
const STARTNEWGAME = document.getElementById("play");
const CURRENTLEVEL = document.getElementById("currentLevel");
const WORD = document.getElementById("word");
const TRYWORD = document.getElementById('tryWord');
const WORDDISPLAY= document.getElementById('word-display');
const MESSAGEBOX = document.getElementById('word-message');
const STYLESMSGBOX = document.querySelector('word-messageStyle');
const DIFFICULTYSELECT = document.getElementById('difficulty');
const DIFFICULTYDIV = document.getElementById('difficultyDiv');
const EXITDISPLAY = document.getElementById('exitDisplay');
const EXIT = document.getElementById('exit');

STARTNEWGAME.addEventListener('click', () => {

    exitDisplay();
    playRestart();
    
});

DIFFICULTYSELECT.addEventListener('change', () => {
    
    let selectedOption = DIFFICULTYSELECT.value; 
    console.log(selectedOption);
    
    if (selectedOption == 'easy') {

        NEWGAME.player.startLife = 6;

    } else if (selectedOption == 'normal') {

        NEWGAME.player.startLife = 5;

    } else if (selectedOption == 'hard') {

        NEWGAME.player.startLife = 4;
    }
    
    NEWGAME.player.restartLife();
    checkLife();
});

TRYWORD.addEventListener('click', () => {

    NEWGAME.words.compareLetter(WORD.value);
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
        TRYWORD.style.display = "none";
        WORD.style.display = "none";
    }

    if (NEWGAME.words.completedWord) {
        
        nextLevel();
        WORD.value ="";
    }

    if (!NEWGAME.level.checkMaxLevel){
        NEWGAME.win();
    }
});

    EXIT.addEventListener ('click' , () => {

        exit();

    });



function showLetter() {

    WORDDISPLAY.innerHTML = NEWGAME.words.checkUnderScore();
}

function showMessage() {

    MESSAGEBOX.innerHTML = NEWGAME.words.checkMessage();
    MESSAGEBOX.style.cssText = STYLESMSGBOX;    
}

function clearMessage() {

    MESSAGEBOX.innerHTML = "";
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

function nextLevel() {

    NEWGAME.nextLevel();
    resetInterface();
}


function playRestart() {
    
    NEWGAME.playRestartGame();
    resetInterface();
}

function resetInterface() {

    checkLife();
    checkCurrentLevel();
    createUnderScore();
    clearMessage();
    TRYWORD.style.display = "block";
    WORD.style.display = "block";
}

function exitDisplay() {

    DIFFICULTYDIV.style.display="none";
    EXITDISPLAY.style.display="block";

}

function exit() {

    DIFFICULTYDIV.style.display="block";
    EXITDISPLAY.style.display="none";
    TRYWORD.style.display="none";
    MESSAGEBOX.innerHTML = "Select game difficulty and start the game";
    
}





