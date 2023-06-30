const startCombat = require("./combat");
const Spell = require("./Spell");
const library = require("./libraries");

const startGame = (party) => {
  startCombat(party);
};

module.exports = startGame;
