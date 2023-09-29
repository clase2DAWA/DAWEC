var WORD = WORD || {};
WORD.randomWord = 
WORD.word = class Word{
    constructor() {
        this.words = ["Browser", "Charger", "Desktop", "Gateway", "Hotspot", "Scanner", "Startup"];
        this.wordRandom = this.words[Math.floor(Math.random() * this.words.length)];
      }
    
    letterInWord(letter) {
        let include = false;
        if(this.word.includes(letter)){
            include = true;
        }
        return include;
    }

};

export default WORD.word;