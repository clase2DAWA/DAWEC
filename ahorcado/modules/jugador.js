let JUGADOR = {};
JUGADOR.jugador = class {
    constructor() {
        this.vidas = 10;
    }
    restarVida() {
        this.vidas = this.vidas - 1;
    }
    comprobarVidas() {
        if (this.vidas <= 0) {
            return "Has perdido";
        }
    }
}


export { JUGADOR };