class game {
    
    constructor() {

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
    showLetter(letters, letter, word) {
        
        for (let i = 0; i < word.length; i++) {
            underscores.push("_");
        }
        for (let i = 0; i < letters.length; i++) {
            letra = letter;
            indice = letters[i];
            underscores[indice] = letra;
        }
        return underscores;
    }

}