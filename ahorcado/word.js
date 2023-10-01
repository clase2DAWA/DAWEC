
export let Word = class Word {
    constructor(){
        this.words = ["ordenador", "color", "radio", "pantalla", "precipitado", "aprobado", "suspenso", "ingeniero", "alcohol"];
    }
    randomWord() {//metodo de la clase word
        const secretWord = this.words[Math.floor(Math.random() * this.words.length)];              
        return secretWord;
    }
}