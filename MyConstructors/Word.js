var Letter = require("./Letter");

var Word = function() {
this.letters = word.split("").map(function(char) {     
	return new Letter(char);   
});
}

Word.prototype.getSolution = function() {   return this.letters.map(function(letter) { // iterate over each letter     return letter.getSolution(); // return the solution for each to form an array of solved letters   }).join(''); // create a string from the array of solved letters }