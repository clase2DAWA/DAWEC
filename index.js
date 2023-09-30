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
        game.useLetters.push((document.getElementById("userLetter").value));
        document.getElementById("mensage").innerHTML = "";
    } else {
        document.getElementById("mensage").innerHTML = "Introduce only one character.";
    }
   

};


let a = [1,2,3];
let b = [1,2,3];


if(a === b){
    console.log("hola");
}







