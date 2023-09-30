import { Juego } from "./modules/juego.js";
import { Jugador } from "./modules/jugador.js";










var juego=new Juego();
var jugador= new Jugador();
jugador.dibujaVida();


function volverJugar(){
    juego=new Juego();
    jugador = new Jugador();
    jugador.dibujaVida();
}



function partida(){

    jugador.dibujaVida();

    if(!juego.ponerLetra()) {
        jugador.letraFallada();
    }
    
    juego.ganar(jugador)
        

    jugador.dibujaVida();
    


}   

document.getElementById("enviar").addEventListener("click", partida);
document.getElementById("volverJugar").addEventListener("click", volverJugar);


