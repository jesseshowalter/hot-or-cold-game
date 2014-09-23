
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(500);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(500);
  	});

});

// create a newGame function to run on pageload and on button push
// create a chooseNumber function to pick a random number between 1 and 100
// write a named function that recieves user guess and determines which conditional feedback to provide
// create absolute values(logic) in correspondance to the secret numbr and the guessed number (hot cold, hotter colder, really hot! really cold!)

// feedback should replce text in the h2#feedback
// amount of guesses apperas in span.#count
// each previusly guessed number appended onto the ul#guestList
// create check for numerical input for each guess, if wrong display error message



// ****** functions needed *******

// newGame()
// createSecretNum()
// checkGuess()
// hotOrCold()
// guessFeedback()
// countGuesses()
// listGuesses()
// validateGuess
