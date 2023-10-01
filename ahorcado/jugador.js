export class Jugador{
    constructor(nombre){
        this.nombre=nombre;
        this.vidas=10;
    }

    restarVidas(){
        this.vidas=vidas-1;
    }

}