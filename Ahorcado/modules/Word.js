class Word {
    constructor(){
        random = Math.floor(Math.random() * 6);
        const word = ["zapato", "puerta", "habitacion", "edificio", "pantalla"]
    }
    returnWord() {
        return word[random];
    }
}
export { Word }