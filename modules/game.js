import { Player } from "./player";
import { Word } from "./word";

class Game{
    constructor() {
             let letra = document.getElementById("letra");
             let palabra = new Word();
    }

    comprobarLetra(letra) {
        return false;
        if (this.palabraAleatoria().includes(letra)) {
            return true;
        }
    }

    vidas(letra, game) {
        if (comprobarLetra(letra) = true) {
          console.log("La palabra contiene esa letra");
        } else {
          this.vidas--;
          console.log("Letra incorrecta");
          if (this.intentos == 0) {
            console.log("Has perdido. La palabra era: " + palabraAleatoria());
          }
        }
      }
} 

export {Game}