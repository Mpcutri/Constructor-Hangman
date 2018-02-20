var inquirer = require("inquirer");

//==================== ATTENTION: NOT YET COMPLETE. . WORKING THROUGH IT TODAY!! =========================//

function Letter(name) {
  this.name = name;
  // creates the printInfo method and applies it to all programmer objects
  this.printInfo = function() { // COMMENT THIS OUT! DOESN'T WORK. . . SHOULD I PASTE checkLetters() in here??
    if (this.name ===)
    console.log("Letter Guessed1: " + this.name);
    console.log("====================");
  };
}

// Array of Word Options (all lowercase)
var wordsList = ["trout", "salmon", "pickerel", "tuna", "hammerhead", "bass",
  "sunfish"];
// Solution will be held here.
var chosenWord = "";
// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses
var wrongGuesses = [];
// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


function startGame() {
  // Reset the guesses back to 0.
  numGuesses = 9;
  // Solution is chosen randomly from wordList.
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  // The word is broken into individual letters.
  lettersInChosenWord = chosenWord.split("");
  // We count the number of letters in the word.
  numBlanks = lettersInChosenWord.length;
  // We print the solution in console (for testing).
  console.log(chosenWord);
  // CRITICAL LINE - Here we *reset* the guess and success array at each round.
  blanksAndSuccesses = [];
  // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = [];
  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }
  // Print the initial blanks in console.
  console.log(blanksAndSuccesses);
  // Reprints the guessesLeft to 9
  console.log("\nYou have " +numGuesses+ " guesses left!");
  // Prints the blanks at the beginning of each round in the HTML
  console.log(blanksAndSuccesses.join(" "));
  // Clears the wrong guesses from the previous round
  console.log(wrongGuesses.join(" "));
}

function checkLetters(letter) {
  // This boolean will be toggled based on whether or not a user letter is found anywhere in the word.
  var letterInWord = false;
  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      // If the letter exists then toggle this boolean to true. This will be used in the next step.
      letterInWord = true;
    }
  }
  // If the letter exists somewhere in the word, then figure out exactly where (which indices).
  if (letterInWord) {
    // Loop through the word.
    for (var j = 0; j < numBlanks; j++) {
      // Populate the blanksAndSuccesses with every instance of the letter.
      if (chosenWord[j] === letter) {
        // Here we set the specific space in blanks and letter equal to the letter when there is a match.
        blanksAndSuccesses[j] = letter;
      }
    }
    // Logging for testing.
    console.log(blanksAndSuccesses);
  }
  // If the letter doesn't exist at all...
  else {
    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
    wrongGuesses.push(letter);
    console.log("Wrong Guesses: " + wrongGuesses + ", ")
    numGuesses--;
  }
}

function roundComplete() {
  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);
  console.log("\n==========\n");

  console.log("\n" + numGuesses);

  console.log("\n" + blanksAndSuccesses.join(" "));

  console.log("\n" + wrongGuesses.join(" "));

  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    winCounter++;
    console.log("\n==========" + "\nYou win!" + "\n==========");

    console.log(winCounter);
    startGame();
  }

  else if (numGuesses === 0) {

    lossCounter++;

     console.log("\n==========" + "\nYou lose!" + "\n==========");

    console.log(lossCounter);
    // Restart the game.
    startGame();
  }
}
startGame();

  var guessALetter = function() {
    if (lettersInChosenWord.toString() !== blanksAndSuccesses.toString()) {
      // INQUIRER 
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
    } else if (numGuesses === 0 || lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        roundComplete();
      }
  } 

guessALetter();
