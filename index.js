import {Game} from "./modules/game.js"

let game = new Game();

document.getElementById("lives").innerHTML = game.player.lives;