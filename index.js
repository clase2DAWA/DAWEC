import {Game} from "./game.js";
let game = new Game();
document.getElementById("check").onclick = function() {
    let result = game.checkWord(document.getElementById("user").value);
    console.log(result);
};