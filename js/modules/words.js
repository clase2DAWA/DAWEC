let WORDS = {};

WORDS.words = class words {
    constructor() {
        //Arrays de palabras
        this.palabras = [
            "ORDENADOR",
            "RATON",
            "TECLADO",
            "PANTALLA",
            "GRAFICA",
            "TARJETA",
            "CAMARA",
            "CABLES",
            "PLACA BASE",
            "VENTILADORES"
        ];
        //Obtenemos un apalabra aleatoria
        this.palabraAleatoria = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    }
    
    //Método para sacar una palabra aleatoria
    obtenerPalabraAleatoria() {
        return this.palabraAleatoria;
    }

    //Método para sacar el largo de la palabras
    longitudPalabra() {
        return this.palabraAleatoria.length;
    }

}

export{WORDS};
