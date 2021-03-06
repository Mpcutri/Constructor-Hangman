var inquirer = require("inquirer");

var Game = function() {

}

function startGame() {
  numGuesses = 9;
  console.log("==========\n" + "Wins: " + winCounter + " | Losses: " + lossCounter);
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  lettersInChosenWord = chosenWord.split("");
  emptyUnderscores = lettersInChosenWord.length;
  console.log("\nWord To Guess (shown for testing): " + chosenWord);
  blanksAndSuccesses = [];
  wrongGuesses = [];

  for (var i = 0; i < emptyUnderscores; i++) {
    blanksAndSuccesses.push("_");
  }
  console.log("\nYou have " +numGuesses+ " guesses left!");
  console.log(blanksAndSuccesses.join(" "));
  console.log(wrongGuesses.join(" "));
  guessALetter();
}

function checkLetters(letter) {
  displayWord = "";
  var letterInWord = false;
  for (var i = 0; i < emptyUnderscores; i++) {
    if (chosenWord[i] === letter.name) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < emptyUnderscores; j++) {
      if (chosenWord[j] === letter.name) {
        blanksAndSuccesses[j] = letter.name;
      }
    }
    for (var k = 0; k < blanksAndSuccesses.length; k++) {
      displayWord += blanksAndSuccesses[k] + " ";
    }
    console.log(displayWord);
  }
  else {
    wrongGuesses += letter.name + ", ";
    console.log("Wrong Guesses: ", wrongGuesses);
    numGuesses--;
  }
}

function roundComplete() {

  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    winCounter++;
    console.log("\n==========" + "\nYou win!");
    startGame();
  }

  else if (numGuesses === 0) {

    lossCounter++;

    console.log("\n==========" + "\nYou lose!");
    startGame();
  }
}

module.exports = Game;