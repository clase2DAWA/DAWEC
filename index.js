import {Game} from "./modules/game.js"

let game = new Game();
document.getElementById("lives").innerHTML = game.player.lives;
document.getElementById("word").innerHTML = game.arrUnderscores;
let letterUser = document.getElementById("submit").value;
document.getElementById("submit").addEventListener("click", secretWord());
document.getElementById("word").innerHTML = game.underscores();
function secretWord(){
    document.getElementById("word").innerHTML = game.underscores();
}
