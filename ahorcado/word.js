
let words = ["ordenador", "color", "radio", "pantalla", "precipitado", "aprobado", "suspenso", "ingeniero", "alcohol"];
export let Word = class Word {
    randomWord() {//metodo de la clase word
        const secretWord = Math.floor(Math.random() * words.length);
        let showWord = "";//para ahora en el for id agregando _ segun la long de la palabra
        for (let index = 0; index < secretWord.length; index++) {
            showWord += "_";
        }
        console.log(secretWord, words[secretWord]);
        return showWord;
    }
}