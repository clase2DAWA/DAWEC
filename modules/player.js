class Player {
    constructor (name){
        this.playerName = name;
        this.lives = 8;
    };
    failLetter(){
        return this.lives--;
    };
};
export {Player};