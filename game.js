import {Players} from "./modules/player.js";
let game = new Game();
document.getElementById("check").onclick = function() {
    let result = game.checkNumber(document.getElementById("user").value);
    console.log(result);
};