var WORDS = WORDS || {};
WORDS.words = class {

    constructor() {

        this.numberLetter = Math.floor(Math.random() * (10 - 4 + 1)) +4;
        this.currentWord = "";
        this.unlockedWord ="";
        this.wordsFourLetters = ["Cama","Casa" ,"Mesa","Duro","Rico","Lago","Rojo","Azul","Vino","Amor","Idea","Piel"]
        this.wordsFiveletters = ["Agua","Perro","Cielo","Fuego","Raton","Suelo","Broma","Juego","Mujer","Joven","Coche","Lapiz","Jugar","Dulce","Reloj","Peine","Largo"]
        this.wordsSixLetters = [];
        this.wordsSevenLetters = [];
        this.wordsEightLetters = [];
        this.wordsNineLetters = [];
        this.wordsTenLetters = [];
    }

    newWord() {
        
    }

    selectWord() {



    }
}

export { WORDS };