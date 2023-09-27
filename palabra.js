class Palabra{
 
    constructor(){
        this.palabrasDisponibles=["coches", "camion","avion","moto"];
        this.numIndex=Math.floor(Math.random()*this.palabrasDisponibles.length);
        this.palabra=this.palabrasDisponibles[this.numIndex];
    }

    contieneLetra(letra){
        var contiene= false;
        if(this.palabra.includes(letra)){
            contiene=true;
        }

        return contiene;
    }


}
export { Palabra };