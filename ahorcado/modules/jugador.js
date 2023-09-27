let JUGADOR = {};
JUGADOR.jugador = class {
    constructor() {
        vidas = 10;
    }
    restarVida(vidas) {
        vidas = vidas - 1;
    }
    comprobarVidas(life) {
        if (vidas <= 0) {
            return "Has perdido"
        }
    }
}

export { JUGADOR };