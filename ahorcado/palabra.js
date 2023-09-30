export class Palabra{
        constructor() {
            this.palabras = ["java", "coche", "comida", "barco", "submarino", "helicoptero","programa","concierto"];
            //para obtener un número aleatorio dentro de un array
            this.palRandom = Math.floor(Math.random() * this.palabras.length);
        }

            obtenerPalabra(){
                return this.palabras[this.palRandom];
              }
    }

    
