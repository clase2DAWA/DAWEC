let PLAYER = {};
PLAYER.player = class Jugador {
  constructor(nombre) {
    this.nombre = nombre;
    this.vidas = 9;
  }

  /**
   * Resta una vida al total de vidas del jugador
   */
  restarVida() {
    this.vidas -= 1;
    return this.vidas;
  }
};

export { PLAYER };
