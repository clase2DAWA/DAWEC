let PLAYER = {};

PLAYER.player = class player {
    constructor(nombre) {
        this.nombre = "Santi";
        this.intentos = 6;
    }

    quitarIntento() {
        this.intentos--;
    }

    getNombre() {
        return this.nombre;
    }

    getIntentosRestantes() {
        return this.intentos;
    }
}

export { PLAYER };
