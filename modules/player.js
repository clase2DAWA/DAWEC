var GAME = GAME || {};
GAME.Crear = class {
  
    constructor(){   
        this.life = 4;
        this.respuesta = "hamburguesa";
        console.log(this.respuesta);
    }
    checkletra( letra){

        if (this.respuesta.includes(letra)) {
            this.respuesta.indexOf(letra);
            let cadenaAct = document.getElementById("respuesta").textContent+"";
            console.log(cadenaAct);
            let arregloCadena = cadenaAct.split(""); // Convertir la cadena en un array de caracteres
            arregloCadena[this.respuesta.indexOf(letra)] = letra; 
            arregloCadena[this.respuesta.lastIndexOf(letra)] = letra;// Cambiar la letra en la posición deseada
            document.getElementById("respuesta").textContent = arregloCadena.join("") ; // Volver a convertir el array en una cadena
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