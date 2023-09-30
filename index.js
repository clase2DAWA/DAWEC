import {Game} from "./modules/game.js";

let game = new Game();
document.getElementById("lives").innerHTML = game.player.lives;
game.undercores();
document.getElementById("word").innerHTML = game.arrUndercores;
console.log(game.word);

document.getElementById("send").onclick = function(){document.getElementById("word").innerHTML = game.arrWord};
document.getElementById("send").onclick = function(){document.getElementById("word").innerHTML = game.arrWord};



