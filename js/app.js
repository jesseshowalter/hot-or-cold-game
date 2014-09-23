
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(500);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(500);
  	});

  	/*--- Create a new Game on button click ---*/
  	$(".new").click(function(){
  		newGame();
  	});

  	/*--- Create the secret number ---*/
  	var createSecretNum = function(){
		secretNum = Math.floor(Math.random() * 100 + 1);
		console.log("Generated Random Number = " + secretNum);
	};

	/*--- Create a new Game ---*/
	var newGame = function(){
		console.log("Created a new game");
		createSecretNum();
	};
	newGame();

	/*--- Check user inputed gues and run conditional logic ---*/
	var checkGuess = function(){
		$("#guessButton").click(function(e){
			e.preventDefault(); // stops page reload
			var userGuess = $("#userGuess").val(); // stored users input
			
			// if(){

			// }else if{

			// }else if{

			// }else{

			// };
			console.log(secretNum);

			$("#userGuess").val(""); // clears the form field for next guess
		});
	};
	checkGuess();

});















// ****** Needed Functions *******
//** Done **
// newGame() ** Done **
// createSecretNum() ** Done **


// checkGuess()
// hotOrCold()
// guessFeedback()
// countGuesses()
// listGuesses()
// validateGuess


// ****** Requirments Breakdown *******
// ** Done ** 
// create a newGame function to run on pageload and on button push   ** Done ** 
// create a chooseNumber function to pick a random number between 1 and 100  ** Done **


// ** Still need to be done **
// write a named function that recieves user guess and determines which conditional feedback to provide
// create absolute values(logic) in correspondance to the secret numbr and the guessed number (hot cold, hotter colder, really hot! really cold!)

// feedback should replace text in the h2#feedback
// amount of guesses apperas in span.#count
// each previusly guessed number appended onto the ul#guestList
// create check for numerical input for each guess, if wrong display error message




