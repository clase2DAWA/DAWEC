import { Juego } from "./juego.js";
import { Jugador } from "./jugador.js";

var juego=new Juego();
var jugador1= new Jugador();

jugador1.dibujaVida();


document.getElementById("enviar").addEventListener("click", function (){

    var letra=juego.obtenerLetra();
    console.log(letra)
    
    if(letra){
        juego.ponerLetra();
    }else{
        jugador1.letraFallada();

    }
    jugador1.dibujaVida();


});


