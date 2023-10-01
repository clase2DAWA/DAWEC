import { jugador} from "./jugador.js";
import { words } from "./palabra.js";

   
class Game {
    constructor(){
        this.player=new jugador();
        this.word=new words();
        this.novisible=[];
    }
    dividir (){
        for (let i = 0; i < this.word.solucion.length; i++) {
            this.novisible.push=this.word.solucion.charAt(i);
        }
        return this.novisible;
    }
    buscar(x){
        let correcta=[];
        for (let i = 0; i < this.solucion.length; i++) {
            contiene=false;
            if (this.word.solucion.charAt(i)==x){
              contiene=true;
                correcta.push(x);
              return contiene;
            }else{
                this.player.herir;
            }
        }
      }
    game(y){
        this.word.elegir;
        while(this.player.vivo=true){
            this.buscar(y);
        }
    }
      
}
