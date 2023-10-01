import { Game } from "./modules/game.js";

let game = new Game();
document.getElementById("lives").innerHTML = game.player.lives;
game.undercores();
document.getElementById("word").innerHTML = game.arrUndercores;
game.ocurrences(document.getElementById("userLetter").value);
document.getElementById("send").onclick = function () {
    game.remplace(document.getElementById("userLetter").value);
    document.getElementById("word").innerHTML = game.arrUndercores;
    if ((document.getElementById("userLetter").value).length < 2) {
        game.letterUsed((document.getElementById("userLetter").value));
        document.getElementById("mensage").innerHTML = "";
    } else {
        document.getElementById("mensage").innerHTML = "Introduce only one character.";
    }
    if(game.countLetterUsed(document.getElementById("userLetter").value) > 1){
        document.getElementById("mensage").innerHTML = "Your letter already used.";
    }
    if(game.compareArr() == 0){
        document.getElementById("mensage").innerHTML = "You win.";
    }
    if(!game.arrCharactWord.includes(document.getElementById("userLetter").value)){
        game.player.failLetter();
        document.getElementById("lives").innerHTML = game.player.lives;
       
    }
    if(game.player.lives == 0){
        document.getElementById("mensage").innerHTML = "Game over.";
    }

};












