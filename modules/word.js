let palabras = ['hola','adios'];
class Word{
    palabraAleatoria() {
        let palabraAleatoria = palabras[Math.floor(Math.random()*(palabra.length))]; 
        return palabraAleatoria;
    }

    comprobarLetra(letra) {
        return false;
        if (this.getPalabraAleatoria().includes(letra)) {
            return true;
        }
    }
} 

export {Word}