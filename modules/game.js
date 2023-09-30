let GAME = {};

GAME.game = class {
    
    constructor(word) {
        this.underscores = [];
        this.arrWord = word;
    }

    checkLetter(letter, word) {
        contain = false;
        if (word.indexOf(letter) != -1) {
            contain = true;
        }
        return contain;
    }
    ocurrences(letter, word) {
        letters = [];
        position = word.indexOf(letter);
        while (position != -1) {
            letters.push(position);
            position = word.indexOf(letter, position + 1);
        }
        return letters;
    }
    showUnderscores(word){
       for (let i = 0; i < word.length; i++) {
            this.underscores.push("_");
        } 
        return this.underscores;
    }
    showLetter(letter, word) {

        for (let i = 0; i < this.underscores.length; i++) {
            let index = word[i];
            this.underscores[value] = letter;
        }
        return this.underscores;
    }

}
export {GAME};