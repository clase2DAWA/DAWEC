var LEVELS = LEVELS || {};
LEVELS.levels = class {

    constructor() {

        this.currentLevel = 1;
        this.maxLevel = 9;
        this.difficult = ["easy", "normal", "hard"];
        this.defaultDif = "easy";

    }

    checkCurrentLevel() {
        
        return this.currentLevel;
    }

    checkMaxLevel() {

        return this.currentLevel >= this.maxLevel;
    }

    nextLevel() {
        
        if (this.checkMaxLevel()){
            this.currentLevel++;
        }     
    }

    restartLevel() {

        this.currentLevel = 1;
    }
}

export { LEVELS };