import {JUEGO} from "./modules/juego.js";
import {JUGADOR} from "./modules/jugador.js";
import {PALABRA} from "./modules/palabra.js";

let juego = new JUEGO.juego();
let jugador = new JUGADOR.jugador();
let palabra = new PALABRA.palabra();

var palabraSelec = palabra.seleccionarPalabra()
document.getElementById("check").onclick = juego.prueba;