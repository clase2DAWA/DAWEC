var GAME = GAME || {};
import {Word} from "./word.js"
GAME.Crear = class {
  
    constructor(){   
        this.life = 4;
        let word = new Word(); 
        this.respuesta = word.getRespuesta();
        console.log("llega");
       document.getElementById("respuesta").textContent =  '_'.repeat(this.respuesta.length) ;
    }
    checkletra( letra){

        if (this.respuesta.includes(letra)) { 
            this.respuesta.indexOf(letra);
            let cadenaAct = document.getElementById("respuesta").textContent+"";
            console.log(cadenaAct);
            let arregloCadena = cadenaAct.split(""); 
            arregloCadena[this.respuesta.indexOf(letra)] = letra; 
            arregloCadena[this.respuesta.lastIndexOf(letra)] = letra;
            document.getElementById("respuesta").textContent = arregloCadena.join("") ; 
            if (cadenaAct == this.respuesta){
                document.getElementById("respuesta").textContent = "Felicidades Has Ganado" ;
            }
        }else{
            if (this.life != 1) {
                 this.life = this.life - 1
                 document.getElementById("vidas").textContent = this.life;
            }else{
                document.getElementById("vidas").textContent = 0;
                document.getElementById("respuesta").textContent = "has perdido"
               
            }
           
        }
    }
}
export {GAME};