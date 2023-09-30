class Word {

    constructor() {
        this.words = ["apple", "banana", "sun", "moon", "sea", "table"];
        this.randomWord = Math.floor(Math.random()*this.words.length);
    };
    word () {
        return this.words[this.randomWord]; 
    };

}
export {Word};