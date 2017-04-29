window.onload = function () {
	
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

	// buttons cuz whats better than buttons...
	var buttons = function () {
		myButtons = document.getElementById("buttons");
		letters = document.createElement("ul");

		for (var i = 0; i < alphabet.length; i++) {
			letters.id = "alphabet";
			list = document.createElement("li");
			list.id = "letter";
			list.innerHTML = alphabet[i];
			check();
			myButtons.appendChild(letters);
			letters.appendChild(list);
		}
	}
	// Create guesses ul
   	result = function () {
    	wordHolder = document.getElementById("hold");
    	correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      	correct.setAttribute("id", "my-word");
      	guess = document.createElement("li");
      	guess.setAttribute("class", "guess");

      	if (word[i] === "-") {
          guess.innerHTML = "-"; 
          space = 1;
      	} else {
          guess.innerHTML = "_";
     	}

     	guesses.push(guess);
      	wordHolder.appendChild(correct);
      	correct.appendChild(guess);
    	}
   }
	// guesses ul
	comments = function () {
		showLives.innerHTML = "You have " + lives + " chances to save the planet";
		if(lives < 1) {
			showLives.innerHTML = "OH NO! Captain Pollution WINS!";
		}
		for (var i = 0; i < guesses.length; i++) {
			if (counter + space === guesses.length) {
				showLives.innerHTML = "You Win!";
			}
		}
	}


  	var animate = function () {
    	var bodyParts = 0,
        	maxParts = 10;
    	return {
      		addBodyPart : function () {
        if (bodyParts < maxParts) {
          ++bodyParts;
         var hangman = document.getElementById("hangman");
  		
        	}
    	}
    	}
	}


	
  	// on click
  	check = function () {
  		list.onclick = function () {
  			var guess = (this.innerHTML);
  			this.setAttribute("class", "active");
  			this.onclick = null;
  			for (var i = 0; i < word.length; i++) {
  				if (word[i] === guess) {
  					guesses[i].innerhtml = guess;
  					counter += 1;
  					}
				}
  			var j = (word.indexOf(guess));
  			if (j === -1) {
  			lives -= 1;
  			comments();
  			animate();
  		}	else {
  			comments();
  			}
  		}
  	}

	play = function () {
		wordChoices = [
		"captain_planet", "mullet", "gaia", "earth", "fire", "wind", "water", "heart", "planeteers", "captain-pollution", "by-our-powers-combine"
		];

		word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
		word = word.replace(/\s/g, "-");
		console.log(word);
		buttons();

		guesses = [ ];
		lives = 10;
		counter = 0;
		space = 0;
		result();
		comments();
		animate();
	}

	play();

	// Hint

	 	hint.onclick = function() {
	 		hints = [
	 	"img capt", "img mullet", "img gaia", "img earth", "img fire", "wind", "heart", "img planeteers", "img capt BP", "img power"
	 		];
	 	
	 		var hintIndex = wordChoices.indexOf(word);
	 		showClue.innerHTML = "Clue: - " + hints[hintIndex];	
		};

	document.getElementById('reset').onclick = function() {
		correct.parentNode.removechild(correct);
		letters.parentNode.removeChild(letters);
		showClue.innerHTML = "";
		context.clearRect(0, 0, 400, 400);
		play();
	}

}
	
	
