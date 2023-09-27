import {JUEGO} from "./modules/juego.js";

let juego = new JUEGO.juego();
document.getElementById("check").onclick = juego.prueba;