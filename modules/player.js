var PLAYER = PLAYER || {} ;
PLAYER.player = class {

    constructor() {
        
        this.startLife = 5;
        this.currentLife = 5;
        this.dead = false;
    }

    checkLife() {

        return this.currentLife;
    }

    checkDead() {

        return this.dead;
    }


    gainLife() {

        return this.checkLife() <=4
        ? this.CurrentLife++
        : "You are full health";
    }

    loseLife() {
        
        this.currentLife--;

        if (this.currentLife <= 0){
            this.dead = true;
        }
    }

    restartLife() {
        this.currentLife = 5;
        this.dead = false;
    }
}

export { PLAYER };