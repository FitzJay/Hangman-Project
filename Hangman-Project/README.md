# Hangman-Project
HW 3
  var animate = function () {
    var bodyParts = 0,
        maxParts = 10;
    return {
      addBodyPart : function () {
        if (bodyParts < maxParts) {
          ++bodyParts;
          appendChild("#hangman" + bodyParts).images("opacity", 1);
        }
    }
}

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var words;			// array of words
	var chosenWord;     // selected word
	var getHint;       // giveHint 4 word
	var guess;         // guess
	var guesses = [ ];    // stored guess
	var lives;         // Lives
	var counter;       // # of correct guesses
	var space;          // # of spaces in word '-'

	var showLives = document.getElementById("mylives");
	var getHint = document.getElementById("hint");
	var showClue = document.getElementById("clue");