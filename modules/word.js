export class Word{
    constructor() {
        this.words = ["Browser", "Charger", "Desktop", "Gateway", "Hotspot", "Scanner", "Startup"];
        this.word = this.chooseWordRandom().toLowerCase();
        this.guessedLetter = new Array(this.word.length).fill('_');
    }
    
    chooseWordRandom() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }

    guessLetter(letter) {
        letter = letter.toLowerCase();
        let guess = false;
        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] === letter) {
                this.guessedLetter[i] = letter;
                guess = true;
            }
        }
        return guess;
    }

    finishWord() {
        return this.guessedLetter.indexOf('_') === -1;
      }
    

    getGuessLetter() {
        return this.guessedLetter.join(' ');
    }

    getWord(){
        return this.word;
    }

};