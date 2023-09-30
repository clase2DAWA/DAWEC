import { GAME } from './modules/game.js';

let juego = new GAME.game();

function comprobarLetra() {
    let letra = document.getElementById('letra').value.toUpperCase();
    document.getElementById('letra').value = '';

    let resultado = juego.comprobarLetra(letra);

    if (resultado === null) {
        document.getElementById('frase').innerText = 'Esta letra ya fue usada. Elige otra.';
    } else {
        if (resultado === "victoria") {
            document.getElementById('frase').innerText = '¡Has ganado!';
            juego.reiniciarJuego();
            actualizarInterfaz();
        } else if (resultado === "derrota") {
            document.getElementById('frase').innerText = '¡Has perdido! La palabra era: ' + juego.palabra.obtenerPalabraAleatoria();
            juego.reiniciarJuego();
            actualizarInterfaz();
        } else if (resultado) {
            document.getElementById('frase').innerText = '¡Buena elección!';
        } else {
            document.getElementById('frase').innerText = 'Letra incorrecta :(';
        }

        document.getElementById('palabra').innerText = juego.obtenerPalabraAdivinada().split('').join(' ');
        document.getElementById('intentos').innerText = 'Intentos restantes: ' + juego.obtenerIntentosRestantes();
        document.getElementById('letras-usadas').innerText = 'Letras usadas: ' + juego.obtenerLetrasUsadas().join(', ');

        if (juego.obtenerIntentosRestantes() <= 0) {
            document.getElementById('frase').innerText = '¡Has perdido! La palabra era: ' + juego.palabra.obtenerPalabraAleatoria();
        }
    }
}


function reiniciarJuego() {
    juego.reiniciarJuego();
    actualizarInterfaz();
}


function actualizarInterfaz() {
    document.getElementById('frase').innerText = '';
    document.getElementById('palabra').innerText = juego.obtenerPalabraAdivinada();
    document.getElementById('intentos').innerText = 'Intentos restantes: ' + juego.obtenerIntentosRestantes();
    document.getElementById('letras-usadas').innerText = 'Letras usadas: ' + juego.obtenerLetrasUsadas().join(', ');
}



document.getElementById('comprobar').addEventListener('click', comprobarLetra);
document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);

// Inicializar la interfaz gráfica
document.getElementById('palabra').innerText = juego.obtenerPalabraAdivinada();
document.getElementById('intentos').innerText = 'Intentos restantes: ' + juego.obtenerIntentosRestantes();
document.getElementById('letras-usadas').innerText = 'Letras usadas: ';


