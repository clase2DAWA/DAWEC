var PLAYER = PLAYER || {} ;
PLAYER.player = class {

    constructor() {

        this.startLife = 6;
        this.currentLife = this.startLife;
        this.dead = false;
    }

    checkLife() {

        return this.currentLife;
    }

    checkDead() {

        return this.dead;
    }


    gainLife() {

        return this.checkLife() <=this.startLife
        ? this.CurrentLife++
        : undefined;
    }

    loseLife() {
        
        this.currentLife --;

        if (this.currentLife <= 0){
            this.dead = true;
        }
    }

    restartLife() {

        this.currentLife = this.startLife;
        this.dead = false;
    }
}

export { PLAYER };