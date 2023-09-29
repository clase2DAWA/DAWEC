let PALABRA = {};
PALABRA.palabra = class Palabra {
  constructor() {
    // Array de palabras y pistas
    this.palabras = [
      { palabra: "rinoceronte", pista: "Vivo en los bosques de África" },
      { palabra: "manzana", pista: "Puedo ser roja y también verde" },
      { palabra: "platano", pista: "Crezco en los árboles" },
      { palabra: "pantalla", pista: "Me usas sin parar" },
      { palabra: "bombilla", pista: "Sin mi no verías" },
      { palabra: "linterna", pista: "Tu mejor aliado en la oscuridad" },
      { palabra: "botella", pista: "¿Qué vas a hechar en mi?" },
      { palabra: "cuaderno", pista: "Poco a poco voy desapareciendo" },
      { palabra: "motocicleta", pista: "Para usarme tienes que tener valor" },
      { palabra: "boligrafo", pista: "Puedo ser de muchos colores distintos" },
      { palabra: "destornillador", pista: "Indispensable para montar cosas" },
    ];
    // Atributos de clase
    this.aleatorio = Math.floor(Math.random() * 11);
    this.palabra = this.palabras[this.aleatorio].palabra;
    this.pista = this.palabras[this.aleatorio].pista;
    this.longitudPalabra = this.palabra.length;
  }

  /**
   * Establecer nueva palabra aleatoria
   * @returns String con una palabra dependiendo del numero aleatorio
   */
  newPalabra() {
    this.aleatorio = this.generaNum();
    this.setPalabra();
    this.setPista();
    this.setLongitudPalabra();
  }

  /**
   * Generar el numero aleatorio
   * @returns Devuelve entero entre 0 y 10
   */
  generaNum() {
    return Math.floor(Math.random() * 11);
  }

  /**
   * Establece el valor de la pista
   */
  setPista() {
    this.pista = this.palabras[this.aleatorio].pista;
  }

  /**
   * Setea el valor de la palabra
   */
  setPalabra() {
    this.palabra = this.palabras[this.aleatorio].palabra;
  }

  /**
   * Establece la longitud que tiene la palabra
   */
  setLongitudPalabra() {
    this.longitudPalabra = this.palabra.length;
  }

  getPalabraArray() {
    return this.palabra.split("");
  }
};

export { PALABRA };
