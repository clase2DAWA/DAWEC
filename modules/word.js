let palabras = ['hola','adios'];
class Word{
    palabraAleatoria() {
        let palabraAleatoria = palabras[Math.floor(Math.random()*(palabra.length))]; 
        return palabraAleatoria;
    }
} 

export {Word}