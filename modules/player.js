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
        return this.checkLife() <= 0
    }


    gainLife() {
        return this.checkLife() <=4
        ? this.CurrentLife++
        : "You are full health";

    }

    loseLife() {
        return this.checkLife() >0
        ? this.CurrentLife--
        : this.dead = true;
    }

    restartLife() {
        this.currentLife = 5;
        this.dead = false;
    }
}

export { PLAYER };