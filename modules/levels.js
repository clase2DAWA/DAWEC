var LEVELS = LEVELS || {};
LEVELS.levels = class {

    constructor() {

        this.currentLevel = 1;
        this.maxLevel = 5;
        this.maxLevelreached = false;
        this.difficult = ["easy", "normal", "hard"];
        this.defaultDif = "easy";

    }

    checkCurrentLevel() {
        
        return this.currentLevel;
    }

    checkMaxLevel() {

        return this.maxLevel >= this.currentLevel;
    }

    nextLevel() {
        
        if (!this.checkMaxLevel()){
            this.currentLevel++;
        } else{
            this.maxLevelreached = true;
        }    
    }

    restartLevel() {

        this.currentLevel = 1;
    }
}

export { LEVELS };