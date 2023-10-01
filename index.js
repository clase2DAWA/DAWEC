import { Game } from "./modules/game"
import { Player } from "./modules/player"

let jugador = new Player();
let juego = new Game();

document.getElementById("check").onclick = function() {
    let result = juego.comprobarLetra(getElementById("playerWord").value);
    console.log("result");
}
