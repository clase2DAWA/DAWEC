import { Palabra } from "./palabra.js";
import { Jugador } from "./jugador.js";


export class Juego{

    constructor(palabra) {
        this.guionesBajos = [];
        this.arrPalabra = palabra;
    }

    comprobarLetra(letra, palabra) {
        let esta = false;
        if (palabra.indexOf(letra) != -1) {
            esta = true;
        }
        return esta;
    }

    ocurrencias(letra, palabra) {
        let letras = [];
        let posicion = palabra.indexOf(letra);
        while (posicion != -1) {
            letras[letras.length] = posicion;
            posicion = palabra.indexOf(letra, posicion + 1);
        }
        return letras;
    }

    //si adivinamos la letra para que se muestre
    mostrarLetra(letra, palabra) {
        for (let i = 0; i < this.guionesBajos.length; i++) {
            if (palabra[i] == letra) {
                this.guionesBajos[i] = letter;
            }
        }
        return this.guionesBajos;
    }


    mostrarGuiones(palabra) {
        for (let i = 0; i < palabra.length; i++) {
            this.guionesBajos[i]="_";
        }
        return this.guionesBajos;
    }
}

