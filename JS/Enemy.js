class Enemy {
    constructor(name, index, number = 1) {
        this.name = library.masterEnemyList[name].name;
        this.maxHP = library.masterEnemyList[name].maxHP;
        this.defense = library.masterEnemyList[name].defense;
        this.speed = library.masterEnemyList[name].speed;
        this.exp = library.masterEnemyList[name].exp;
        this.goldMin = library.masterEnemyList[name].goldMin;
        this.goldMax = library.masterEnemyList[name].goldMax;
        this.damage = 0;
        this.alive = true;
        this.status = 'attacking!';
        this.index = `${this.name}-${index}`;
        this.number = number;
        this.img = library.masterEnemyList[name].img;
        this.initiative = 0;
        this.isEnemy = true;
    }

    get attacks() { 
        const attacks = {};
        const attackList = library.masterEnemyList[this.name].attacks;
        for (let i = 0; i < attackList.length; i++) {
            attacks[attackList[i]] = library.enemySkills[attackList[i]]
        }
        return attacks;
    }
    
    get currentHP() {
        return this.maxHP - this.damage;
    }
    get gold() {
        return randomNumberGenerator(this.goldMin, this.goldMax)
    }

    get encounterName() {
        return `${this.name} ${this.number}`
    }

    get healthState() {
        const healthPercent = this.currentHP / this.maxHP;
        if (healthPercent === 1) {
            return `is <span class='green'>perfectly healthy</span>.`
        }
        else if (healthPercent >= .75) {
            return `is <span class='green'>slightly wounded</span>.`
        }
        else if (healthPercent >= .5) {
            return `is <span class='yellow'>wounded and breathing heavily</span>.`
        }
        else if (healthPercent >= .25) {
            return `is <span class='orange'>grievously wounded</span>.`
        }
        else if (healthPercent > 0) {
            return `is <span class='red'>struggling to stay standing</span>.`
        }
        else {
            this.alive = false;
            return `has <span class='red'>been defeated</span>.`;
        }
    }
}