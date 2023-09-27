let PALABRA = {};
PALABRA.palabra = class {
    constructor() {
        this.palabras = ["manzana", "naranja", "perro", "gato", "sol", "luna", "agua", "fuego", "amarillo", "verde", 
        "cielo", "tierra", "montaña", "valle", "río", "mar", "mesa", "silla", "cama", "almohada", "libro", "pluma", 
        "computadora", "teclado", "teléfono", "cargador", "casa", "jardín", "solución", "problema", "risa", "llanto", 
        "feliz", "triste", "rápidamente", "lentamente", "alto", "bajo", "ancho", "estrecho", "frío", "caliente", "amor", 
        "odio", "bueno", "malo", "dulce", "amargo", "nuevo", "viejo"]
    }
    seleccionarPalabra(){
        return this.palabras[Math.floor(Math.random() * this.palabras.length)];
    }
}
export { PALABRA };