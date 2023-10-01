class Word {
    // Genera un numero aleatorio, y segun este numero selecciono una palabra en el array
    randomWord(){
        const wordsArry = ["Sol", "Luna", "Mar", "Lago", "Río", "Bosque", "Monte", "Flor", "Oro", "Plata", "Azul", "Rojo", "Verde", "Amarillo", "Gris", "Blanco", "Negro", 
                          "Niño", "Niña", "Perro", "Gato", "Ratón", "Casa", "Calle", "Puerta", "Ventana", "Mesa", "Silla", "Cama", "Libro", "Lápiz", "Tren", "Auto", "Avión", 
                          "Barco", "Fruta", "Pan", "Leche", "Agua", "Vino", "Carne", "Pescado", "Música", "Danza", "Risa", "Llanto", "Amor", "Odio", "Paz", "Guerra"];
        return wordsArry[Math.floor(Math.random() * wordsArry.length-1)];
    }
}
export default Word;