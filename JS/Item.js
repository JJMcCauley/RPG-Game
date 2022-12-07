class Item {
    constructor(name, type, weight, description, attack, attackRange, defense, evasion, equippable = false, equipped = false, specialEffects = null) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.description = description;
        this.attack = attack;
        this.attackRange = attackRange;
        this.defense = defense;
        this.evasion = evasion;
        this.equippable = equippable;
        this.equipped = equipped;
        this.specialEffects = specialEffects;
    }

    generateItem() {
        const item = new Item(this.name, this.type, this.weight, this.description, this.attack, this.attackRange, this.defense, this.evasion, this.equippable, this.equipped, this.specialEffects);
        return item;
    }
}