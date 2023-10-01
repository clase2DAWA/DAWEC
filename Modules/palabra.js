class palabra {
  constructor(palabras) {
    this.palabras = palabras;
    this.palabraAdivinar = "";
    this.seleccionarPalabra();
  }

  seleccionarPalabra() {
    this.palabraAdivinar = this.palabras[Math.floor(Math.random() * this.palabras.length)];
  }

  mostrarLongitud() {
    return this.palabraAdivinar.length;
  }
}

const listaDePalabras = [
  "manzana",
  "adivina",
  "mando",
  "folio",
  "cargador",
  "lapiz",
  "rinoceronte",
  "flexo",
  "pantalon",
  "chicle",
  "piano"
];

const juego = new Palabra(listaDePalabras);

console.log("Longitud de la palabra seleccionada: " + juego.mostrarLongitud());

juego.seleccionarPalabra();

console.log("Longitud de la nueva palabra seleccionada: " + juego.mostrarLongitud());