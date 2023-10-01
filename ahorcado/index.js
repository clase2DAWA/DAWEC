import { JUEGO } from "./modules/juego.js";
import { JUGADOR } from "./modules/jugador.js";
import { PALABRA } from "./modules/palabra.js";

let juego = new JUEGO.juego();
let jugador = new JUGADOR.jugador();
let palabra = new PALABRA.palabra();

var palabraSelec = palabra.seleccionarPalabra();
let letrasAdivinadas = []; // Array para letras adivinadas
let letrasNoAdivinadas = palabraSelec.split(""); // Array para letras no adivinadas, inicialmente contiene todas las letras de la palabra

// Función para actualizar la visualización de la palabra a adivinar
function actualizarVisualizacion() {
    let visualizacion = "";
    for (let letra of palabraSelec) {
        if (letrasAdivinadas.includes(letra)) {
            visualizacion = visualizacion + letra + " ";
        } else {
            visualizacion = visualizacion + "_ ";
        }
    }
    document.getElementById("palabraAdivinar").innerHTML = visualizacion;
}

actualizarVisualizacion();

document.getElementById("check").addEventListener("click", function() {
    let letraUsuario = document.getElementById("introduceLetra").value;
    juego.comprobarPalabra(letraUsuario, palabraSelec, letrasAdivinadas, letrasNoAdivinadas);
    actualizarVisualizacion();

    // Verificar si el jugador ha ganado
    if (!visualizacion.includes("_")) {
        document.getElementById("pista").innerHTML = "¡Has ganado! La palabra era: " + palabraSelec;
    }
});