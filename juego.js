import { Jugador } from "./jugador.js";
import { Palabra } from "./palabra.js"

class Juego {
    constructor() {

        this.palabra= new Palabra();
        this.dibujaPalabraInicial();
        //this.jugador1= new Jugador();

    }


    obtenerLetra() {
        
        return document.getElementById("letra").value;

    }
    
    ponerLetra() {

        var letraPuesta=false;    
        var letraPoner=this.obtenerLetra();
           
        if(this.palabra.contieneLetra(letraPoner)) {
            this.dibujarPalabra(letraPoner);
            letraPuesta=true;
        } 
        return letraPuesta;     
    }

    dibujarPalabra(letra) {
        
        var palabraUsuario=document.getElementById("palabra").textContent.replaceAll(" ","");
        var palabraSeparada= this.palabra.getPalabra().split("");
        var pProvisional=palabraUsuario.split("");
        
        for(var i=0;i<palabraSeparada.length;i++){
                        
            if( letra == palabraSeparada[i]) {    
                pProvisional[i]=letra;
            }
        }
        
        palabraUsuario=pProvisional.join(" ");
        document.getElementById("palabra").textContent=palabraUsuario;      
    }

    
    
    dibujaPalabraInicial() {

        var largoPalabra=this.palabra.getPalabra().length;
        var palabraInicial="";

        for(var i=0; i<largoPalabra;i++){
            palabraInicial+= "_ ";
            
        }
        document.getElementById("palabra").textContent=palabraInicial;
    }



    ganar(jugador){
        var victoria=0;
        if(jugador.getVidas()==-1){
            document.getElementById("victoria").textContent="Has perdido";
            victoria=-1;
        }else if(this.palabraCompleta()){
            document.getElementById("victoria").textContent="Has Ganado";
            victoria=1;
        }

        return victoria;

    }

    palabraCompleta(){
        var palabraUsuario= document.getElementById("palabra").textContent;

        return !palabraUsuario.includes("_");
    }
}


export {Juego}