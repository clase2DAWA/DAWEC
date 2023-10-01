import {GAME} from "./modules/player.js"
let game = new GAME.Crear();
document.getElementById("botonreset").onclick = function(){
  location.reload();
}
document.getElementById("botonText").onclick = function(){
    console.log(game.checkletra(document.getElementById("texto").value));
  }

