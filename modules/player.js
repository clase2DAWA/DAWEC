class Player {
    constructor (name){
        this.playerName = name;
        this.lives = 8;
    };
    failLetter(){
        while(this.lives > 0){
          return this.lives--;  
        }
        
    };
};
export {Player};