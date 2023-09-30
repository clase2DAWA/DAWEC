class Palabra {
 
    constructor() {
        
        this.palabrasDisponibles=["coche", "camion","avion","moto","bicicleta"];
        this.numIndex=Math.floor(Math.random()*this.palabrasDisponibles.length);
        this.palabra=this.palabrasDisponibles[this.numIndex];
        
    }

    contieneLetra(letra) {
        
        var contiene= false;
        
        if(this.palabra.includes(letra)) {
            
            contiene=true;
        }

        return contiene;
    }
    
    getPalabra() {
        
        return this.palabra;
    }


}
export { Palabra };