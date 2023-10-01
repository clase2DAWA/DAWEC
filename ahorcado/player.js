
export let Player = class Player {
    constructor (game) {
        this.letter = "";
        this.game = game;
    }
    addKeyDown() {       
        document.addEventListener("keydown", (e) => {
            this.letter = e.key;
            console.log(this.letter);
            this.game.refresh(this.letter);
        })
    }
}