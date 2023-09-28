var PLAYER = PLAYER || {};
PLAYER.player = class Player{
    constructor(){
        this.life = 5;
    }

    checkLife(){
        this.life--;
    }
};

export default PLAYER.player;