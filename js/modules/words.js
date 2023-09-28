class words {
    constructor() {
        //Arrays de palabras
        this.palabras = [
            { palabra: "ordenador" },
            { palabra: "ratón" },
            { palabra: "teclado" },
            { palabra: "pantalla" },
            { palabra: "gráfica" },
            { palabra: "tarjeta" },
            { palabra: "cámara" },
            { palabra: "cables" },
            { palabra: "placa base" },
            { palabra: "ventiladores" },
        ];
    }

    obtenerPalabraAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * this.palabras.length);
        return this.palabras[indiceAleatorio];
    }

}