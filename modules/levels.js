var LEVELS = LEVELS || {};
LEVELS.levels = class {

    constructor() {

        this.currentLevel = 1;
        this.maxLevel = 9;
        this.difficult = ["easy", "normal", "hard"];
        this.defaultDif = "easy";

    }

    nextLevel() {
        
        if (this.checkMaxLevel()){
            this.currentLevel++;
        }     
    }

    resetLevel() {

        this.currentLevel = 1;
    }

    checkCurrentLevel() {
        return this.currentLevel;
    }

    checkMaxLevel() {

        return this.currentLevel >= this.maxLevel;
    }

}

export { LEVELS };