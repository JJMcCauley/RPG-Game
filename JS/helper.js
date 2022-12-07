function randomNumberGenerator(min, max) {
    // Returns a random integer from 1 to 10:
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function capitalizeWord(word) {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
}

function damageFormula(attack, defense) {    
    return Math.round(attack * (100 / (100 + defense)))
}

function isEven(number) {
    if (number % 2 === 0) return true;
    else return false;
}

function divFocus(div) {
    div.style.border = '.5em solid rgb(63, 226, 210)'
}