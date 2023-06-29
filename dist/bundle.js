/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Item.js":
/*!*********************!*\
  !*** ./src/Item.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const library = __webpack_require__(/*! ./libraries */ \"./src/libraries.js\");\r\n\r\nclass Item {\r\n  constructor(name, category, subcategory = null) {\r\n    this.name = name;\r\n    this.type = library.masterItemList[category][subcategory][name].type;\r\n    this.weight = library.masterItemList[category][subcategory][name].weight;\r\n    this.description = library.masterItemList[category][subcategory][name].desc;\r\n    if (subcategory === \"weapons\") {\r\n      this.hands = library.masterItemList[category][subcategory][name].hands;\r\n      this.attack = library.masterItemList[category][subcategory][name].attack;\r\n      this.damage = library.masterItemList[category][subcategory][name].damage;\r\n      this.dmgRange =\r\n        library.masterItemList[category][subcategory][name].dmgRange;\r\n      if (library.masterItemList[category][subcategory][name].defense) {\r\n        this.defense =\r\n          library.masterItemList[category][subcategory][name].defense;\r\n      }\r\n      if (library.masterItemList[category][subcategory][name].evasion) {\r\n        this.evasion =\r\n          library.masterItemList[category][subcategory][name].evasion;\r\n      }\r\n      if (library.masterItemList[category][subcategory][name].specialEffects) {\r\n        this.specialEffects =\r\n          library.masterItemList[category][subcategory][name].specialEffects;\r\n      }\r\n      this.equippable = true;\r\n      this.equipped = false;\r\n    } else if (subcategory === \"armor\") {\r\n      this.defense =\r\n        library.masterItemList[category][subcategory][name].defense;\r\n      this.evasion =\r\n        library.masterItemList[category][subcategory][name].evasion;\r\n      this.magicDefense =\r\n        library.masterItemList[category][subcategory][name].magicDefense;\r\n      if (library.masterItemList[category][subcategory][name].specialEffects) {\r\n        this.specialEffects =\r\n          library.masterItemList[category][subcategory][name].specialEffects;\r\n      }\r\n      this.equippable = true;\r\n      this.equipped = false;\r\n    }\r\n  }\r\n\r\n  generateItem() {\r\n    const item = new Item(\r\n      this.name,\r\n      this.type,\r\n      this.weight,\r\n      this.description,\r\n      this.attack,\r\n      this.attackRange,\r\n      this.defense,\r\n      this.evasion,\r\n      this.equippable,\r\n      this.equipped,\r\n      this.specialEffects\r\n    );\r\n    return item;\r\n  }\r\n}\r\n\r\nmodule.exports = Item;\r\n\n\n//# sourceURL=webpack://rpg_combat/./src/Item.js?");

/***/ }),

/***/ "./src/Job.js":
/*!********************!*\
  !*** ./src/Job.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const library = __webpack_require__(/*! ./libraries */ \"./src/libraries.js\");\r\nconst Item = __webpack_require__(/*! ./Item */ \"./src/Item.js\");\r\n\r\nclass Job {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.startingHP = library.masterJobList[name].startingHP;\r\n    this.startingMP = library.masterJobList[name].startingMP;\r\n    this.startingStr = library.masterJobList[name].startingStr;\r\n    this.startingDex = library.masterJobList[name].startingDex;\r\n    this.startingSpeed = library.masterJobList[name].startingSpeed;\r\n    this.startingSta = library.masterJobList[name].startingSta;\r\n    this.startingInt = library.masterJobList[name].startingInt;\r\n    this.startingLuck = library.masterJobList[name].startingLuck;\r\n    this.heaviestEquipment = library.masterJobList[name].heaviestEquipment;\r\n    this.startingEquipment = library.masterJobList[name].startingEquipment;\r\n    this.img = library.masterJobList[name].img;\r\n    this.hasSpells = library.masterJobList[name].hasSpells;\r\n    this.hasAbilities = library.masterJobList[name].hasAbilities;\r\n  }\r\n\r\n  get spells() {\r\n    if (this.hasSpells) {\r\n      return library.masterJobList[this.name].spells;\r\n    } else return \"none\";\r\n  }\r\n\r\n  get startingArmor() {\r\n    const armor = new Item(this.startingEquipment.armor, \"equipment\", \"armor\");\r\n    return armor;\r\n  }\r\n\r\n  get startingWeapon() {\r\n    const weapon = new Item(\r\n      this.startingEquipment.weapon,\r\n      \"equipment\",\r\n      \"weapons\"\r\n    );\r\n    return weapon;\r\n  }\r\n}\r\n\r\nmodule.exports = Job;\r\n\n\n//# sourceURL=webpack://rpg_combat/./src/Job.js?");

/***/ }),

/***/ "./src/Party.js":
/*!**********************!*\
  !*** ./src/Party.js ***!
  \**********************/
/***/ ((module) => {

eval("class Party {\r\n  constructor(members) {\r\n    this.members = members;\r\n    this.gold = 0;\r\n    this.exp = 0;\r\n    this.inventory = [];\r\n  }\r\n}\r\n\r\nmodule.exports = Party;\r\n\n\n//# sourceURL=webpack://rpg_combat/./src/Party.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((module) => {

eval("class Player {\r\n  constructor(party) {\r\n    this.party = party;\r\n  }\r\n}\r\n\r\nmodule.exports = Player;\r\n\n\n//# sourceURL=webpack://rpg_combat/./src/Player.js?");

/***/ }),

/***/ "./src/PlayerCharacter.js":
/*!********************************!*\
  !*** ./src/PlayerCharacter.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Job = __webpack_require__(/*! ./Job */ \"./src/Job.js\");\r\nconst PlayerStats = __webpack_require__(/*! ./PlayerStats */ \"./src/PlayerStats.js\");\r\n\r\nclass PlayerCharacter {\r\n  constructor(name, gender, job) {\r\n    this.name = name;\r\n    this.level = 3;\r\n    this.gender = gender;\r\n    this.job = new Job(job);\r\n    this.equipment = {\r\n      weapon: this.job.startingWeapon,\r\n      helmet: \"none\",\r\n      armor: this.job.startingArmor,\r\n      accessory: \"none\",\r\n    };\r\n    this.stats = new PlayerStats(this.job);\r\n    this.status = \"none\";\r\n    this.isEnemy = false;\r\n    this.damage = 0;\r\n    this.spentMP = 0;\r\n    this.initiative = 0;\r\n    this.currentlyCasting = \"\";\r\n  }\r\n\r\n  get alive() {\r\n    if (this.currentHP <= 0) {\r\n      return false;\r\n    } else return true;\r\n  }\r\n\r\n  get attack() {\r\n    let damage = 0;\r\n    let randomInt = randomNumberGenerator(1, 10);\r\n    let attack = this.equipment.weapon.damage;\r\n    if (isEven(randomInt)) {\r\n      attack += randomNumberGenerator(0, this.equipment.weapon.dmgRange);\r\n    } else {\r\n      attack -= randomNumberGenerator(0, this.equipment.weapon.dmgRange);\r\n    }\r\n    if (this.equipment.weapon.weight === \"light\") {\r\n      damage = Math.round((2 * attack + 2 * this.stats.dex) / 3);\r\n    } else {\r\n      damage = Math.round((2 * attack + this.stats.str) / 3);\r\n    }\r\n    if (damage > 1) return damage;\r\n    else return 1;\r\n  }\r\n\r\n  get magicAttack() {\r\n    let damage = 0;\r\n    let randomInt = randomNumberGenerator(1, 10);\r\n    const spell = this.currentlyCasting;\r\n    let magicAttack = spell.baseDamage + this.level;\r\n    if (isEven(randomInt)) {\r\n      magicAttack += randomNumberGenerator(0, spell.damageRange);\r\n    } else {\r\n      magicAttack -= randomNumberGenerator(0, spell.damageRange);\r\n    }\r\n    damage = Math.round((2 * magicAttack + this.stats.int) / 3);\r\n    if (damage > 1) return damage;\r\n    else return 1;\r\n  }\r\n\r\n  get currentHP() {\r\n    return this.stats.maxHP - this.damage;\r\n  }\r\n\r\n  get currentMP() {\r\n    return this.stats.maxMP - this.spentMP;\r\n  }\r\n\r\n  get partyIndex() {\r\n    for (let i = 0; i < party.members.length; i++) {\r\n      if (party.members[i].name === this.name) {\r\n        return i;\r\n      }\r\n    }\r\n  }\r\n\r\n  get pronoun() {\r\n    if (this.gender === \"male\") {\r\n      return \"he\";\r\n    } else if (this.gender === \"female\") {\r\n      return \"she\";\r\n    } else if (this.gender === \"non-binary\") {\r\n      return \"they\";\r\n    }\r\n  }\r\n\r\n  get spells() {\r\n    if (this.job.hasSpells) {\r\n      const spellList = [];\r\n      for (let spellLevel in this.job.spells) {\r\n        for (let i = 0; i < this.job.spells[spellLevel].length; i++) {\r\n          if (parseInt(spellLevel) <= this.level) {\r\n            spellList.push(this.job.spells[spellLevel][i]);\r\n          }\r\n        }\r\n      }\r\n      if (spellList.length >= 1) {\r\n        const spellObjects = [];\r\n        for (let i = 0; i < spellList.length; i++) {\r\n          const newSpell = masterSpellList.filter(\r\n            (magSpell) => magSpell.name === spellList[i]\r\n          );\r\n          spellObjects.push(newSpell[0]);\r\n        }\r\n        return spellObjects;\r\n      } else return `${capitalizeWord(this.name)} knows no spells yet.`;\r\n    } else return `${capitalizeWord(this.name)} has no spells.`;\r\n  }\r\n\r\n  get hasOffensiveSpells() {\r\n    if (typeof this.spells !== \"string\") {\r\n      for (let i = 0; i < this.spells.length; i++) {\r\n        if (this.spells[i].type === \"offensive\") {\r\n          return true;\r\n        }\r\n      }\r\n      return false;\r\n    } else return false;\r\n  }\r\n\r\n  get hasSupportSpells() {\r\n    if (typeof this.spells !== \"string\") {\r\n      for (let i = 0; i < this.spells.length; i++) {\r\n        if (this.spells[i].type === \"support\") {\r\n          return true;\r\n        }\r\n      }\r\n      return false;\r\n    } else return false;\r\n  }\r\n\r\n  equipGear(gear) {\r\n    if (gear.type === \"melee weapon\" || \"ranged weapon\") {\r\n      this.equipment.weapon = gear;\r\n    } else {}\r\n    gear.equipped = true;\r\n  }\r\n\r\n  removeGear(gear) {\r\n    if (gear.name !== \"bare hands\") {\r\n      if (gear.type === \"melee weapon\" || \"ranged weapon\") {\r\n        this.equipment.weapon = masterItemList.weapons.bareHands.generateItem();\r\n      } else {}\r\n      gear.equipped = false;\r\n      party.inventory.push(gear);\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = PlayerCharacter;\r\n\n\n//# sourceURL=webpack://rpg_combat/./src/PlayerCharacter.js?");

/***/ }),

/***/ "./src/PlayerStats.js":
/*!****************************!*\
  !*** ./src/PlayerStats.js ***!
  \****************************/
/***/ ((module) => {

eval("class PlayerStats {\r\n  constructor(job) {\r\n    this.job = job;\r\n    this.maxHP = this.job.startingHP;\r\n    this.maxMP = this.job.startingMP;\r\n    this.str = this.job.startingStr;\r\n    this.dex = this.job.startingDex;\r\n    this.speed = this.job.startingSpeed;\r\n    this.sta = this.job.startingSta;\r\n    this.int = this.job.startingInt;\r\n    this.luck = this.job.startingLuck;\r\n  }\r\n}\r\n\r\nmodule.exports = PlayerStats;\r\n\n\n//# sourceURL=webpack://rpg_combat/./src/PlayerStats.js?");

/***/ }),

/***/ "./src/Spell.js":
/*!**********************!*\
  !*** ./src/Spell.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const library = __webpack_require__(/*! ./libraries */ \"./src/libraries.js\");\r\n\r\nclass Spell {\r\n  constructor(spellName) {\r\n    this.name = spellName;\r\n    this.type = library.masterSpellList[spellName].type;\r\n    this.target = library.masterSpellList[spellName].target;\r\n    this.desc = library.masterSpellList[spellName].desc;\r\n    if (library.masterSpellList[spellName].hpDamage) {\r\n      this.baseDamage = library.masterSpellList[spellName].hpDamage;\r\n      this.damageRange = library.masterSpellList[spellName].damageRange;\r\n    }\r\n    if (library.masterSpellList[spellName].hpHeal) {\r\n      this.baseHeal = library.masterSpellList[spellName].hpHeal;\r\n    }\r\n    this.mpCost = library.masterSpellList[spellName].mpCost;\r\n    this.speed = library.masterSpellList[spellName].speed;\r\n    if (library.masterSpellList[spellName].specialEffects) {\r\n      this.specialEffects = library.masterSpellList[spellName].specialEffects;\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = Spell;\r\n\n\n//# sourceURL=webpack://rpg_combat/./src/Spell.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Item = __webpack_require__(/*! ./Item */ \"./src/Item.js\");\r\nconst Job = __webpack_require__(/*! ./Job */ \"./src/Job.js\");\r\nconst library = __webpack_require__(/*! ./libraries */ \"./src/libraries.js\");\r\nconst Party = __webpack_require__(/*! ./Party */ \"./src/Party.js\");\r\nconst Player = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\r\nconst PlayerCharacter = __webpack_require__(/*! ./PlayerCharacter */ \"./src/PlayerCharacter.js\");\r\nconst PlayerStats = __webpack_require__(/*! ./PlayerStats */ \"./src/PlayerStats.js\");\r\nconst Spell = __webpack_require__(/*! ./Spell */ \"./src/Spell.js\");\r\n\r\nconst defaultParty = [\r\n  new PlayerCharacter(\"Jack\", \"male\", library.jobArray[0]),\r\n  new PlayerCharacter(\"Phen\", \"male\", library.jobArray[1]),\r\n  new PlayerCharacter(\"Nia\", \"female\", library.jobArray[2]),\r\n  new PlayerCharacter(\"Codan\", \"male\", library.jobArray[3]),\r\n];\r\n\r\nconst party = new Party(defaultParty);\r\n\r\nfunction createMasterSpellList() {\r\n  const spellList = [];\r\n  for (let spell in library.masterSpellList) {\r\n    const newSpell = new Spell(spell);\r\n    spellList.push(newSpell);\r\n  }\r\n  return spellList;\r\n}\r\n\r\nconst masterSpellList = createMasterSpellList();\r\n\r\nconsole.log(masterSpellList);\r\n\n\n//# sourceURL=webpack://rpg_combat/./src/index.js?");

/***/ }),

/***/ "./src/libraries.js":
/*!**************************!*\
  !*** ./src/libraries.js ***!
  \**************************/
/***/ ((module) => {

eval("const library = {\r\n  masterEnemyList: {\r\n    bugbear: {\r\n      name: \"bugbear\",\r\n      maxHP: 20,\r\n      maxMP: 6,\r\n      attacks: [\"bash\"],\r\n      defense: 5,\r\n      magicDefense: 5,\r\n      speed: 3,\r\n      exp: 5,\r\n      goldMin: 15,\r\n      goldMax: 20,\r\n      img: \"img/bugbear.png\",\r\n    },\r\n    goblin: {\r\n      name: \"goblin\",\r\n      maxHP: 12,\r\n      maxMP: 5,\r\n      attacks: [\"bash\"],\r\n      defense: 4,\r\n      magicDefense: 3,\r\n      speed: 6,\r\n      exp: 2,\r\n      goldMin: 8,\r\n      goldMax: 12,\r\n      img: \"img/goblin.png\",\r\n    },\r\n    slime: {\r\n      name: \"slime\",\r\n      maxHP: 8,\r\n      maxMP: 2,\r\n      attacks: [\"bash\"],\r\n      defense: 3,\r\n      magicDefense: 8,\r\n      speed: 3,\r\n      exp: 3,\r\n      goldMin: 0,\r\n      goldMax: 4,\r\n      img: \"img/slime.png\",\r\n    },\r\n    spider: {\r\n      name: \"spider\",\r\n      maxHP: 9,\r\n      maxMP: 8,\r\n      attacks: [\"bash\"],\r\n      defense: 3,\r\n      magicDefense: 3,\r\n      speed: 7,\r\n      exp: 3,\r\n      goldMin: 0,\r\n      goldMax: 3,\r\n      img: \"img/spider.png\",\r\n    },\r\n    wolf: {\r\n      name: \"wolf\",\r\n      maxHP: 14,\r\n      maxMP: 4,\r\n      attacks: [\"bash\"],\r\n      defense: 3,\r\n      magicDefense: 4,\r\n      speed: 4,\r\n      exp: 5,\r\n      goldMin: 0,\r\n      goldMax: 5,\r\n      img: \"img/wolf.png\",\r\n    },\r\n  },\r\n\r\n  enemiesByArea: {\r\n    area1: [\"bugbear\", \"goblin\", \"slime\", \"spider\", \"wolf\"],\r\n    area2: [\"wolf\"],\r\n  },\r\n\r\n  masterSkillList: {\r\n    bash: {\r\n      name: \"bash\",\r\n      attack: 6,\r\n      damage: 6,\r\n      damageRng: 3,\r\n      choiceWeight: 0,\r\n      speed: \"medium\",\r\n    },\r\n  },\r\n\r\n  masterSpellList: {\r\n    familiar: {\r\n      name: \"familiar\",\r\n      type: \"support\",\r\n      target: \"self\",\r\n      desc: \"Summons a familiar that attacks on its own every time the character has a turn\",\r\n      mpCost: 4,\r\n      speed: \"medium\",\r\n      specialEffects:\r\n        \"does a certain amount of damage to a random enemy when the user takes a turn\",\r\n    },\r\n    fire: {\r\n      name: \"fire\",\r\n      type: \"offensive\",\r\n      target: \"enemy\",\r\n      desc: \"Burns the target in a fiery inferno that can leave the foe burnt\",\r\n      hpDamage: 12,\r\n      damageRange: 3,\r\n      mpCost: 4,\r\n      speed: \"medium\",\r\n      specialEffects: \"has a chance to burn the enemy\",\r\n    },\r\n    heal: {\r\n      name: \"heal\",\r\n      type: \"support\",\r\n      target: \"friendly\",\r\n      desc: `Heal's target for a small amount`,\r\n      hpHeal: 12,\r\n      mpCost: 4,\r\n      speed: \"medium\",\r\n    },\r\n    lightning: {\r\n      name: \"lightning\",\r\n      type: \"offensive\",\r\n      target: \"enemy\",\r\n      desc: \"Calls lightning down upon an enemy, spreading to nearby foes and having the chance to shock them\",\r\n      hpDamage: 8,\r\n      damageRange: 7,\r\n      mpCost: 4,\r\n      speed: \"medium\",\r\n      specialEffects:\r\n        \"hits other enemies for less damage, every enemy hit has to make a save or have their initiative lowered, the amount of initiative lowered and difficulty of check is based on amount of damage taken\",\r\n    },\r\n    slow: {\r\n      name: \"slow\",\r\n      type: \"offensive\",\r\n      target: \"enemy\",\r\n      desc: \"Lowers an enemy's speed by a small amount\",\r\n      mpCost: 4,\r\n      speed: \"medium\",\r\n      specialEffects: \"slow\",\r\n    },\r\n  },\r\n\r\n  masterItemList: {\r\n    equipment: {\r\n      weapons: {\r\n        bareHands: {\r\n          name: \"bare hands\",\r\n          type: \"melee\",\r\n          weight: \"light\",\r\n          hands: 2,\r\n          desc: \"A hardy pair of fists, although it's hard to cause as much damage without a weapon some prefer to fight without one as it leaves them unecumbered to more easily dodge enemy attacks.\",\r\n          attack: 6,\r\n          damage: 3,\r\n          dmgRange: 2,\r\n          evasion: 3,\r\n          specialEffects: [\"raises evasion slightly\"],\r\n        },\r\n        ironDagger: {\r\n          name: \"iron dagger\",\r\n          type: \"melee\",\r\n          weight: \"light\",\r\n          hands: 1,\r\n          desc: \"A dagger that was made for skinning animal carcasses that is now being employed as a weapon of war.\",\r\n          attack: 8,\r\n          damage: 5,\r\n          dmgRange: 2,\r\n          critRate: 1.5,\r\n          specialEffects: [\"raises rate of critical attacks moderately\"],\r\n        },\r\n        oldIronSword: {\r\n          name: \"old iron sword\",\r\n          type: \"melee\",\r\n          weight: \"medium\",\r\n          hands: 1,\r\n          desc: \"An old iron sword that's seen better days, although it still maintains an edge.\",\r\n          attack: 6,\r\n          damage: 9,\r\n          dmgRange: 4,\r\n        },\r\n        rustedBattleAxe: {\r\n          name: \"rusted battle axe\",\r\n          type: \"melee\",\r\n          weight: \"heavy\",\r\n          hands: 2,\r\n          desc: \"An axe from an ancient war that hasn't seen maintenance in awhile... It can cause heavy damage and be used defensively although it's awkward weight makes it unwieldy\",\r\n          attack: 4,\r\n          damage: 10,\r\n          dmgRange: 3,\r\n          defense: 5,\r\n          specialEffects: [\"raises defense slightly\"],\r\n        },\r\n        woodenBow: {\r\n          name: \"wooden bow\",\r\n          type: \"range\",\r\n          weight: \"light\",\r\n          hands: 2,\r\n          desc: \"A durable wooden bow that unto now had been primarily used in the hunting of wild game.\",\r\n          attack: 10,\r\n          damage: 6,\r\n          dmgRange: 5,\r\n          evasion: 3,\r\n          critRate: 1.3,\r\n          specialEffects: [\r\n            \"raises evasion slightly\",\r\n            \"raises crit rate slightly \",\r\n          ],\r\n        },\r\n        woodenStaff: {\r\n          name: \"bare hands\",\r\n          type: \"melee\",\r\n          weight: \"light\",\r\n          hands: 2,\r\n          desc: \"A hardy pair of fists, although it's hard to cause as much damage without a weapon some prefer to fight without one as it leaves them unecumbered to more easily dodge enemy attacks.\",\r\n          attack: 6,\r\n          damage: 4,\r\n          evasion: 3,\r\n          defense: 3,\r\n          specialEffects: [\"raises evasion slightly\"],\r\n        },\r\n      },\r\n      helmets: {},\r\n      armor: {\r\n        curedLeatherJerkin: {\r\n          name: \"cured leather jerkin\",\r\n          type: \"armor\",\r\n          weight: \"heavy\",\r\n          desc: \"Stiff and difficult to move in, but it can protect its wearer from clawing talons and biting fangs.\",\r\n          defense: 5,\r\n          evasion: 3,\r\n          magicDefense: 2,\r\n        },\r\n        quiltedJerkin: {\r\n          name: \"quilted jerkin\",\r\n          type: \"armor\",\r\n          weight: \"medium\",\r\n          desc: \"Although a bit uncomfortable and scratchy, this armor provides a moderate amount of protection as well as ease of movement.\",\r\n          defense: 3,\r\n          evasion: 4,\r\n          magicDefense: 3,\r\n        },\r\n        travelersRobe: {\r\n          name: \"traveler's robe\",\r\n          type: \"armor\",\r\n          weight: \"light\",\r\n          desc: \"A simple traveler's robe meant to protect one from the elements. Has become favored by those gifted with majikal abilities as it allows for the free movement of the limbs required for the arcane motions used to conjure majiks.\",\r\n          defense: 1,\r\n          evasion: 5,\r\n          magicDefense: 5,\r\n        },\r\n      },\r\n      shield: {},\r\n      accessories: {},\r\n    },\r\n  },\r\n\r\n  masterJobList: {\r\n    hero: {\r\n      name: \"hero\",\r\n      startingHP: 14,\r\n      startingMP: 6,\r\n      startingStr: 5,\r\n      startingDex: 6,\r\n      startingSpeed: 5,\r\n      startingSta: 4,\r\n      startingInt: 5,\r\n      startingLuck: 7,\r\n      startingEquipment: {\r\n        weapon: \"oldIronSword\",\r\n        armor: \"quiltedJerkin\",\r\n        shield: \"\",\r\n      },\r\n      heaviestEquipment: \"medium\",\r\n      img: \"img/hero.png\",\r\n      hasSpells: true,\r\n      hasAbilities: true,\r\n      spells: {\r\n        2: [\"heal\"],\r\n      },\r\n    },\r\n    thief: {\r\n      name: \"thief\",\r\n      startingHP: 12,\r\n      startingMP: 8,\r\n      startingStr: 3,\r\n      startingDex: 8,\r\n      startingSpeed: 8,\r\n      startingSta: 3,\r\n      startingInt: 4,\r\n      startingLuck: 8,\r\n      startingEquipment: {\r\n        weapon: \"woodenBow\",\r\n        armor: \"quiltedJerkin\",\r\n        shield: \"\",\r\n      },\r\n      heaviestEquipment: \"medium\",\r\n      img: \"img/thief.png\",\r\n      hasSpells: true,\r\n      hasAbilities: true,\r\n      spells: {\r\n        3: [\"slow\", \"fire\"],\r\n      },\r\n    },\r\n    warrior: {\r\n      name: \"warrior\",\r\n      startingHP: 20,\r\n      startingMP: 0,\r\n      startingStr: 9,\r\n      startingDex: 5,\r\n      startingSpeed: 3,\r\n      startingSta: 6,\r\n      startingInt: 2,\r\n      startingLuck: 3,\r\n      startingEquipment: {\r\n        weapon: \"rustedBattleAxe\",\r\n        armor: \"curedLeatherJerkin\",\r\n        shield: \"\",\r\n      },\r\n      heaviestEquipment: \"heavy\",\r\n      img: \"img/warrior.png\",\r\n      hasSpells: false,\r\n      hasAbilities: true,\r\n    },\r\n    witch: {\r\n      name: \"witch\",\r\n      startingHP: 8,\r\n      startingMP: 14,\r\n      startingStr: 1,\r\n      startingDex: 4,\r\n      startingSpeed: 6,\r\n      startingSta: 4,\r\n      startingInt: 10,\r\n      startingLuck: 4,\r\n      startingEquipment: {\r\n        weapon: \"woodenStaff\",\r\n        armor: \"curedLeatherJerkin\",\r\n        shield: \"\",\r\n      },\r\n      heaviestEquipment: \"light\",\r\n      img: \"img/witch.png\",\r\n      hasSpells: true,\r\n      hasAbilities: false,\r\n      spells: {\r\n        1: [\"fire\"],\r\n        2: [\"familiar\"],\r\n        3: [\"lightning\", \"heal\"],\r\n      },\r\n    },\r\n  },\r\n\r\n  jobArray: [\"hero\", \"warrior\", \"thief\", \"witch\"],\r\n\r\n  screens: {\r\n    intro: `\r\n            <div id=\"intro-screen\" class=\"container p-1 position-relative\">\r\n                <div id='intro-div' class=\"row center position-absolute top-50 start-50 translate-middle\">\r\n                    <button type=\"button\" id=\"start-naming\" class=\"btn col-3 btn-success mt-5\">Name Your Party</button>\r\n                    <button type=\"button\" id=\"start-combat\" class=\"btn col-3 btn-info mt-5\">Skip Naming</button>\r\n                </div>\r\n            </div>\r\n        `,\r\n\r\n    nameParty: `\r\n                <label for=\"character-name\" id='character-label' class=\"text-center col-12\">Please enter the main hero's name!</label>\r\n                <div id='character-name-div'>\r\n                    <div class=\"mt-3 col-6\">\r\n                        <input name='character-name' id=\"character-name-input\"></input>\r\n                    </div>\r\n                    <div id=\"radio-div\" class=\"mt-3 col-3\">\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"genderOptions\" id=\"radioHe\" value=\"male\" checked>\r\n                            <label class=\"form-check-label\" for=\"inlineRadio1\">He</label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"genderOptions\" id=\"radioShe\" value=\"female\">\r\n                            <label class=\"form-check-label\" for=\"inlineRadio2\">She</label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"genderOptions\" id=\"radioThey\" value=\"non-binary\">\r\n                            <label class=\"form-check-label\" for=\"inlineRadio3\">They</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mt-3  col-3\">\r\n                        <button type=\"button\" id=\"name-character\" class=\"btn btn-success\">Name Yourself</button>\r\n                    </div>\r\n                </div>\r\n            `,\r\n\r\n    battle: `\r\n                <div id='combat-screen' class=\"container mt-3 p-3\">\r\n                    <div id=\"enemy-area\" class=\"row mt-1 p-1\">\r\n\r\n                    </div>\r\n                    <div id=\"combat-log\" class=\"row p-5 text-center\">\r\n\r\n                    </div>\r\n                    <div id=\"party\" class=\"row\">\r\n\r\n                    </div>\r\n                    <div id=\"commands\" class=\"row mt-3\">\r\n\r\n                    </div>\r\n                </div>\r\n            `,\r\n\r\n    postBattle: `\r\n                <div id=\"post-combat-screen\" class=\"container p-1 position-relative\">\r\n                    <div id='intro-div' class=\"row center position-absolute top-50 start-50 translate-middle\">\r\n                        <button type=\"button\" id=\"next-combat\" class=\"btn btn-info col-4\">Seek Out an Enemy</button>\r\n                    </div>\r\n                </div>\r\n            `,\r\n  },\r\n\r\n  script: {\r\n    intro: {\r\n      getName: [\r\n        `Please enter the main hero's name!`,\r\n        `Name your strong, tough friend!`,\r\n        `Name your tricky, deft-handed friend!`,\r\n        `Name your friend with a mysterious presence!`,\r\n      ],\r\n    },\r\n  },\r\n};\r\n\r\nmodule.exports = library;\r\n\n\n//# sourceURL=webpack://rpg_combat/./src/libraries.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;