import { WORDS } from './words.js';
import { PLAYER } from './player.js';

let GAME = {};

GAME.game = class game {
    constructor() {
        this.palabra = new WORDS.words();
        this.jugador = new PLAYER.player();

        // Inicializar el estado del juego
        this.letrasUsadas = [];
        this.palabraAdivinada = "_ ".repeat(this.palabra.longitudPalabra());
    }

    comprobarLetra(letra) {
        if (!this.letrasUsadas.includes(letra)) {
            this.letrasUsadas.push(letra);
            let palabraAleatoria = this.palabra.obtenerPalabraAleatoria();

            if (palabraAleatoria.includes(letra)) {
                for (let i = 0; i < this.palabra.longitudPalabra(); i++) {
                    if (palabraAleatoria[i] === letra) {
                        this.palabraAdivinada = this.palabraAdivinada.substring(0, i * 2) + letra + this.palabraAdivinada.substring(i * 2 + 1);
                    }
                }
                if (this.palabraAdivinada.replace(/\s+/g, '') === palabraAleatoria) {
                    document.getElementById('comprobar').disabled = true;
                    document.getElementById('letra').disabled = true;
                    return "victoria";
                } else {
                    return true;
                }
            } else {
                this.jugador.quitarIntento();
                if (this.jugador.getIntentosRestantes() <= 0) {
                    document.getElementById('comprobar').disabled = true;
                    document.getElementById('letra').disabled = true;
                    return "derrota";
                }
                return false;
            }
        }
        return null;
    }

    obtenerPalabraAdivinada() {
        return this.palabraAdivinada;
    }

    obtenerLetrasUsadas() {
        return this.letrasUsadas;
    }

    obtenerIntentosRestantes() {
        return this.jugador.getIntentosRestantes();
    }

    reiniciarJuego() {
        this.palabra = new WORDS.words();
        this.jugador = new PLAYER.player();
        this.letrasUsadas = [];
        this.palabraAdivinada = "_ ".repeat(this.palabra.longitudPalabra());
        document.getElementById('comprobar').disabled = false;
        document.getElementById('letra').disabled = false;
    }
}

export { GAME };
