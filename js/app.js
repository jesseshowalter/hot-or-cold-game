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
  	function createSecretNum(){
		secretNum = Math.floor(Math.random() * 100 + 1);
		console.log("Generated Random Number = " + secretNum);
	};

	/*--- Create a new Game ---*/
	function newGame(){
		console.log("Created a new game");
		createSecretNum();
	};
	newGame();

	/*--- Check user inputed gues and run conditional logic ---*/
	function checkGuess(){
		$("#guessButton").click(function(e){
			e.preventDefault(); // stops page reload
			var userGuess = $("#userGuess").val(); // stored users input
			
			/*--- Conditional Logic ---*/
			if(userGuess > secretNum){
				var distance = userGuess - secretNum;
				console.log("The guess was a larger number than the secret " + distance);
			}else if( secretNum > userGuess){
				var distance = secretNum - userGuess;
				console.log("The secret was larger than the guess " + distance);
			}else{

			};

			$("#userGuess").val(""); // clears the form field for next guess
		});
	};
	checkGuess();

});














// ****** ****** ****** ****** *** 
// ****** Needed Functions *******
// ****** ****** ****** ****** ***

//******** DONE ********
// newGame()
// createSecretNum() 
// checkGuess()

//******** NOT DONE ********
// hotOrCold()
// guessFeedback()
// countGuesses()
// listGuesses()
// validateGuess




// ****** ****** ****** ****** ****** 
// ***** Requirments Breakdown ******
// ****** ****** ****** ****** ****** 

// ****** DONE ****** 
// create a newGame function to run on pageload and on button push
// create a chooseNumber function to pick a random number between 1 and 100
// write a named function that recieves user guess and determines which conditional feedback to provide

// ******** NOT DONE ********
// create absolute values(logic) in correspondance to the secret number and the guessed number (hot cold, hotter colder, really hot! really cold!)
// feedback should replace text in the h2#feedback
// amount of guesses apperas in span.#count
// each previusly guessed number appended onto the ul#guestList
// create check for numerical input for each guess, if wrong display error message




