import { PLAYER } from "./player.js";

var WORDS = WORDS || {};
WORDS.words = class {

    constructor() {

        this.currentGroupWords = this.selectGroupLetter();
        this.currentWord = this.generateWord().toLowerCase();
        this.unlockedWord ="";
        this.underScore = this.createUnderscore();
        this.found = false;
        this.miss = 0;
    }

    createUnderscore() {

        let underScore ="";

        for (let i = 0; i < this.currentWord.length; i++) {
            underScore += "_ ";
        }
        return underScore;
    }

    createWord() {

        this.selectGroupLetter();
        this.generateWord();
        this.createUnderscore();
    }

    checkCurrentWord() {

        return this.currentWord;
    }

    checkMiss() {
        return this.miss;
    }

    checkFound(letter) {
        return this.found
        ? "Good! You found "+ letter+ "letter"
        : missedLetter();
    }


    compareLetter(letter){

        let correctedLetter = letter.toLowerCase().trim();
        this.found = false;

        for (let i = 0; i < this.currentWord.length; i++) {
            if (correctedLetter == this.currentWord[i]){
                this.underScore = this.replaceLetter(i,letter)
                this.found = true;
            }     
        }
        checkFound(letter);
    }

    missedLetter() {

        this.miss += 1
        return "You missed the letter";
    }

    replaceLetter(position,letter){

        return this.underScore.replace(this.underScore[position], letter);
    }

    /*compareReveal(){
        return this.compareLetter(letter)
        ? this.reveal()
        : 
    }*/

    generateWord() {

        let length = this.currentGroupWords.length;
        return this.currentGroupWords[Math.floor(Math.random() * (length +1))];
    }

    randomNumberLetter () {

        return Math.floor(Math.random() * (7));
    }

    selectGroupLetter() {

        let wordsFourLetters = ["Cama","Casa" ,"Mesa","Duro","Rico","Lago","Rojo","Azul","Vino","Amor","Idea","Piel"]
        let wordsFiveletters = ["Agua","Perro","Cielo","Fuego","Raton","Suelo","Broma","Juego","Mujer","Joven","Coche","Lapiz","Jugar","Dulce","Reloj","Peine","Largo"]
        let wordsSixLetters = ["Tomate","Bonito","Pesado","Camisa","Pintor","Pajaro","Camion","Marino","Médico","Lapices","Futuro","Cancion","Altura"];
        let wordsSevenLetters = ["momento","impacto","estudio","sublime","mensaje","delgado","cliente","negocio","esencia","trabajo","sentido","perdido","ventaja","antiguo"];
        let wordsEightLetters = ["tristeza","infinito","proyecto","respecto","bastante","objetivo","inocente","elemento","concreto","servicio"];
        let wordsNineLetters = ["resultado", "confiable", "actividad","respuesta","relevante","excelente","arrogante","recorrido","identidad","bicicleta"];
        let wordsTenLetters = ["importante","desarrollo","compromiso","comentario","meticuloso","adversidad","relevancia","preocupado","productivo","suficiente","existencia"];

        let wholeLetters = [wordsFourLetters,wordsFiveletters,wordsSixLetters,wordsSevenLetters,wordsEightLetters,wordsNineLetters,wordsTenLetters]
        return wholeLetters[this.randomNumberLetter()];   
    }

}

export { WORDS };