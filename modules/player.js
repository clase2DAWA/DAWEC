export class Player{
    constructor(){
        this.life = 9;
        this.guess = [];
    }

    checkLife(){
        this.life--;
    }

    getCheckLife(){
        return this.life;
    }


};