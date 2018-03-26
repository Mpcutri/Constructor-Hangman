var wordsToGuess = require("./words.js");

function Letter(char) {
  this.visible = !/[a-z1-9]/i.test(char); // regex
  this.char = char;
  this.guessALetter = function() {
  	if (numGuesses === 0 || lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        roundComplete();
      // INQUIRER 
    } else if (lettersInChosenWord.toString() !== blanksAndSuccesses.toString()) {
        inquirer.prompt([
          {
            name: "name",
            message: "Guess a letter!"
          }
        ]).then(function(answers) {

          var letterGuessed = new Letter(answers.name);
          
          checkLetters(letterGuessed);
          console.log("\nYou have " +numGuesses+ " guesses left!\n");
          guessALetter();
        });
      }
  }
}

module.exports = Letter;