var LEVELS = LEVELS || {};
LEVELS.levels = class {

    constructor() {

        this.currentLevel = 1;
        this.maxLevel = 5;
        this.maxLevelreached = false;

    }

    checkCurrentLevel() {
        
        return this.currentLevel;
    }

    checkMaxLevel() {

        return this.maxLevel >= this.currentLevel;
    }

    nextLevel() {
        
        if (this.checkMaxLevel()){
            this.currentLevel++;
            console.log(this.checkCurrentLevel);
        } else{
            this.maxLevelreached = true;
        }    
    }

    restartLevel() {

        this.currentLevel = 1;
        this.maxLevelreached = false;
    }
}

export { LEVELS };