let PLAYER = {};
PLAYER.player = class Jugador {
  constructor() {
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
