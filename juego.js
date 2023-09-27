import { Jugador } from "./jugador.js";
import { Palabra } from "./palabra.js"

class Juego{
    constructor(){

        this.palabra= new Palabra();
        //this.jugador1= new Jugador();

    }


    obtenerLetra(){
        var letra = document.getElementById("letra").value;
        console.log(letra);
        return this.palabra.contieneLetra(letra);

    }
    
    
    ponerLetra(){
            var letraPoner=document.getElementById("letra");

            var palabra=document.getElementById("palabra");

            if(!palabra.includes(letraPoner)){

                
            }
    }

    








}


export {Juego}