import { Juego } from "./juego";
import { Jugador } from "./jugador";


let pala=new Palabra();
let jug1=new Jugador("Pablo");
let juego=new Juego(pala);
juego.mostrarGuiones(pala);
document.getElementById("gui").innerHTML(juego.mostrarGuiones(pala));



if(juego.comprobarLetra(document.getElementById("letraUsu"), pala) == false){
    jug1.restarVidas();
    document.getElementById("vid").innerHTML(jug1.vidas);
    if(jug1.vidas <1 ){
        console.log("has perdido");
    }
}else{
    juego.mostrarLetra(juego.mostrarLetra(document.getElementById("letraUsu"),pala));
}



