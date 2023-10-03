import { JUGADOR } from "./jugador.js";

let JUEGO = {};

JUEGO.juego = class {
    constructor() {
        this.letrasIncorrectas = [];
        this.jugador = new JUGADOR.jugador();
    }

    comprobarPalabra(letraUsuario, palabraEscogida, letrasAdivinadas, letrasNoAdivinadas) {
        if (letraUsuario.length !== 1) {
            document.getElementById("pista").innerHTML = "Por favor, introduce una sola letra";
        }else{
            if (palabraEscogida.includes(letraUsuario)) {
                // La letra está en la palabra
                letrasAdivinadas.push(letraUsuario);
                // Remover la letra adivinada de las letras no adivinadas
                letrasNoAdivinadas = letrasNoAdivinadas.filter(letra => letra !== letraUsuario);
            } else {
                // La letra no está en la palabra
                this.letrasIncorrectas.push(letraUsuario);
                document.getElementById("pista").innerHTML = "Has introducido estas letras y son incorrectas: " + this.letrasIncorrectas.join(", ");
                this.jugador.restarVida();
                let resultado = this.jugador.comprobarVidas();
                if (resultado === "Has perdido") {
                    document.getElementById("pista").innerHTML = "¡Has perdido! La palabra era: " + palabraEscogida;
                }
            }
        }

       
    }

    mostrarVidas(){
        return this.jugador.vidas();
    }
}

export { JUEGO };