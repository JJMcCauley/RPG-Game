class Job {
    constructor(name, startingHP, startingMP, startingStr, startingDex, startingSpeed, startingSta, startingInt, startingLuck, heaviestEquipment = 'light') {
        this.name = name;
        this.startingHP = startingHP;
        this.startingMP = startingMP;
        this.startingStr = startingStr;
        this.startingDex = startingDex;
        this.startingSpeed = startingSpeed;
        this.startingSta = startingSta;
        this.startingInt = startingInt;
        this.startingLuck = startingLuck;
        this.heaviestEquipment = heaviestEquipment;
    }

    get startingWeapon() {
        return startingEquipment[this.name].startingWeapon;
    }

    get startingArmor() {
        return startingEquipment[this.name].startingArmor;
    }

    get img() {
        return masterJobList2[this.name].img;
    }

    
}