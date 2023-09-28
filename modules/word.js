export {Word}
let palabras = ['hola','adios'];
class Word{
    getPalabraAleatoria() {
        let palabraAleatoria = palabras[Math.floor(Math.random()*(palabra.length))]; 
        return palabraAleatoria;
    }
} 