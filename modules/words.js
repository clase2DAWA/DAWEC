var WORDS = WORDS || {};
WORDS.words = class {

    constructor() {

        this.currentGroupWords = this.selectGroupLetter();
        this.currentWord = this.generateWord().toLowerCase();
        this.underScore = this.createUnderscore();
        this.found = false;
        this.miss = false;
        this.msg = "";
        this.completedWord = false;    
    }

    createUnderscore() {

        let startUnderScore ="";

        for (let i = 0; i < this.currentWord.length; i++) {
            startUnderScore += "_ ";
        }
        return startUnderScore;
    }

    checkUnderScore () {
        
        return this.underScore;
    }

    createWord() {

        this.currentGroupWords = this.selectGroupLetter();
        this.currentWord = this.generateWord().toLowerCase();
        this.underScore = this.createUnderscore();
        this.found = false;
        this.miss = false;
        this.msg = "";
        this.completedWord = false; 

    }

    checkCompletedWord() {

        let removeSpaces = this.underScore.split(' ').join('');

        if (removeSpaces == this.checkCurrentWord()) {
            this.completedWord = true;
            return true;
        }
        return false
    }

    checkCurrentWord() {

        return this.currentWord;
    }

    checkMessage() {

        return this.msg;
    }

    checkMiss() {

        return this.miss;
    }

    checkFound(letter) {
        
        if (this.found){
            this.letterFound(letter)
        } else {
            this.missedLetter()
        }
    }

    compareLetter(letter){

        let correctedLetter = letter.toLowerCase().trim();
        this.found = false;
        this.miss = false;

        for (let i = 0; i < this.currentWord.length; i++) {
            if (correctedLetter == this.currentWord[i]){
                this.underScore = this.replaceLetter(i,letter)
                this.found = true;
            }     
        }
        this.checkFound(letter);
    }

    generateWord() {

        let length = this.currentGroupWords.length;
        return this.currentGroupWords[Math.floor(Math.random() * length )];
    }

    letterFound(letter) {
        
        this.checkCompletedWord()
        ? this.msg = "You have completed the word"
        : this.msg = "Good! You have found '"+ letter.toUpperCase() + "' letter";
        this.checkMessage();
    }

    missedLetter() {

        this.miss = true;
        this.msg= "You missed! One life gone";
        this.checkMessage();
    }

    randomNumberLetter () {

        return Math.floor(Math.random() * (7));
    }

    replaceLetter(position,letter){

        let updateWord = this.underScore.split('');
        updateWord[position+position] = letter;
        return updateWord.join('');
    }

    selectGroupLetter() {

        let wordsFourLetters = ["Cama","Casa" ,"Mesa","Duro","Rico","Lago","Rojo","Azul","Vino","Amor","Idea","Piel"]
        let wordsFiveletters = ["Agua","Perro","Cielo","Fuego","Raton","Suelo","Broma","Juego","Mujer","Joven","Coche","Lapiz","Dulce","Reloj","Peine","Largo"]
        let wordsSixLetters = ["Tomate","Bonito","Pesado","Camisa","Pintor","Pajaro","Camion","Marino","Medico","Futuro","Altura"];
        let wordsSevenLetters = ["Momento","Impacto","Estudio","Sublime","Mensaje","Delgado","Cliente","Negocio","Esencia","Trabajo","Sentido","Perdido","Ventaja","Antiguo"];
        let wordsEightLetters = ["Tristeza","Infinito","Proyecto","Respecto","Bastante","Objetivo","Inocente","Elemento","Concreto","Servicio"];
        let wordsNineLetters = ["Resultado", "Confiable", "Actividad","Respuesta","Relevante","Excelente","Arrogante","Recorrido","Identidad","Bicicleta"];
        let wordsTenLetters = ["Importante","Desarrollo","Compromiso","Comentario","Meticuloso","Adversidad","Relevancia","Preocupado","Productivo","Suficiente","Existencia"];

        let wholeLetters = [wordsFourLetters,wordsFiveletters,wordsSixLetters,wordsSevenLetters,wordsEightLetters,wordsNineLetters,wordsTenLetters]
        return wholeLetters[this.randomNumberLetter()];   
    }
}

export { WORDS };