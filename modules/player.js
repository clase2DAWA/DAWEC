var PLAYER = PLAYER || {} ;
PLAYER.player = class {

    constructor() {

        this.startLife = 5;
        this.currentLife = 5;

    }

    gainLife() {

        return this.checkLife() <=4
        ? this.CurrentLife++
        : "You are full health";

    }

    checkLife() {
        
        return this.currentLife;
    
    }

    dead() {

        return this.checkLife() <= 0

    }

}


export {PLAYER};