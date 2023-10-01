class jugador {
    constructor(nombre){
        this.nombre = nombre;
        this.intentos = 10;
    }

    unIntentoMenos(){
        this.intentos--;
        return this.intentos;
    }
}