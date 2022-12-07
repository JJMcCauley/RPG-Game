class Enemy {
    constructor(name, maxHP, attack, defense, speed, exp, goldMin, goldMax, index, img) {
        this.name = name;
        this.maxHP = maxHP;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.exp = exp;
        this.goldMin = goldMin;
        this.goldMax = goldMax;
        this.damage = 0;
        this.alive = true;
        this.status = 'attacking!';
        this.index = index;
        this.img = img;
        this.initiative = 0;
    }
    get currentHP() {
        return this.maxHP - this.damage;
    }
    get gold() {
        return randomNumberGenerator(this.goldMin, this.goldMax)
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

    generateEnemy(index) {
        const enemy = new Enemy(this.name, this.maxHP, this.attack, this.defense, this.speed, this.exp, this.goldMin, this.goldMax, index, this.img);
        return enemy;
    }
}