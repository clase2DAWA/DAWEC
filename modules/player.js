
class Player{
    constructor() {
        vidas = 10;
    } 

vidas(letra, game) {
    if (comprobarLetra(letra) = true) {
      console.log("La palabra contiene esa letra");
    } else {
      this.vidas--;
      console.log("Letra incorrecta");
      if (this.intentos == 0) {
        console.log("Has perdido. La palabra era: " + palabraAleatoria);
      }
    }
  }
}

export {Player}