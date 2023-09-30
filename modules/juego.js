import { Jugador } from "./jugador.js";
import { Palabra } from "./palabra.js"

class Juego {
    constructor() {
        this.RECUPERADATOS= {
                    
                    letra:document.getElementById("letra"),
                    palabra:document.getElementById("palabra"),
                    victoria:document.getElementById("victoria")
                };
        this.palabra= new Palabra();
        this.dibujaPalabraInicial();
       
        

    }


    obtenerLetra() {
        
        return this.RECUPERADATOS.letra.value;

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


        
        var palabraUsuario=this.RECUPERADATOS.palabra.textContent.replaceAll(" ","");
        var palabraSeparada= this.palabra.getPalabra().split("");
        var pProvisional=palabraUsuario.split("");
        
        for(var i=0;i<palabraSeparada.length;i++){
                        
            if( letra == palabraSeparada[i]) {    
                pProvisional[i]=letra;
            }
        }
        
        palabraUsuario=pProvisional.join(" ");
        this.RECUPERADATOS.palabra.textContent=palabraUsuario;      
    }

    
    
    dibujaPalabraInicial() {

        var largoPalabra=this.palabra.getPalabra().length;
        var palabraInicial="";

        for(var i=0; i<largoPalabra;i++){
            palabraInicial+= "_ ";
            
        } console.log(this.RECUPERADATOS.letra)
        console.log(this.RECUPERADATOS.palabra);
       
       this.RECUPERADATOS.palabra.textContent=palabraInicial;
    }



    ganar(jugador){
        var victoria=0;
        if(jugador.getVidas()==-1){
            this.RECUPERADATOS.victoria.textContent="Has perdido";
            victoria=-1;
        }else if(this.palabraCompleta()){
            this.RECUPERADATOS.victoria.textContent="Has Ganado";
            victoria=1;
        }

        return victoria;

    }

    palabraCompleta(){
        var palabraUsuario= this.RECUPERADATOS.palabra.textContent;

        return !palabraUsuario.includes("_");
    }
}


export {Juego}