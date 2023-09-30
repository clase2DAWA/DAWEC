class Word {
    constructor(){
        this.randomWord = Math.floor(Math.random() * word.length);
        this.words = ["zapato", "puerta", "habitacion", "edificio", "pantalla"]
        this.word = this.words[this.randomWord]
    }
    returnWord() {
        return word;
    }

    checkWord(word) {

    }
}
export { Word }