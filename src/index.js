const library = require("./libraries");
const Party = require("./Party");
const PlayerCharacter = require("./PlayerCharacter");
const Spell = require("./Spell");

const defaultParty = [
  new PlayerCharacter("Jack", "male", library.jobArray[0]),
  new PlayerCharacter("Phen", "male", library.jobArray[1]),
  new PlayerCharacter("Nia", "female", library.jobArray[2]),
  new PlayerCharacter("Codan", "male", library.jobArray[3]),
];

const party = new Party(defaultParty);

function createMasterSpellList() {
  const spellList = [];
  for (let spell in library.masterSpellList) {
    const newSpell = new Spell(spell);
    spellList.push(newSpell);
  }
  return spellList;
}

const masterSpellList = createMasterSpellList();

console.log(masterSpellList);
