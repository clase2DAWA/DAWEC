class Jugador {
  constructor(nombre) {
    this.nombre = nombre;
    this.vidas = 9;
  }

  /**
   * Resta una vida al total de vidas del jugador
   */
  restarVida() {
    this.vida -= 1;
  }
}
