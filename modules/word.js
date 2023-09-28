var WORD = WORD || {};
WORD.randomWord = 
WORD.word = class Word{
    constructor() {
        this.wordsRandom = ["Browser", "Charger", "Desktop", "Gateway", "Hotspot", "Scanner", "Startup"];
      }
    
    wordRandomGet() {
        let generatorRandomWord = Math.floor(Math.random() * this.wordsRandom.length);
        return this.words[generatorRandomWord];
    }

};

export default WORD.word;