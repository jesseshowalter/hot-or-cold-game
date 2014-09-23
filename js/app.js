var counter = 0;

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

	/*--- Swap words ---*/
	function wordSwap(wordChoice){
		$('h2#feedback').text(wordChoice);
	};

	/*--- Create a new Game ---*/
	function newGame(){
		createSecretNum();
		wordSwap("Make your Guess!");
	};

	newGame();


	/*--- Check user inputed gues and run conditional logic ---*/
	function checkGuess(){
		$("#guessButton").click(function(e){
			e.preventDefault(); // stops page reload
			var userGuess = $("#userGuess").val(); // stored users input
			
			/*--- Conditional Logic ---*/
			if(userGuess == secretNum){
				wordSwap("Winner Winner, Chicken Dinner!");
				listGuesses();
			}else if(userGuess > secretNum){
				var distance = userGuess - secretNum;
				hotCold();
				listGuesses();
			}else if(secretNum > userGuess){
				var distance = secretNum - userGuess;
				hotCold();
				listGuesses();
			};

			/*--- clears the form field for next guess ---*/
			$("#userGuess").val(""); 

			/*--- Determines what wors tp present depending on distance to target ---*/
			function hotCold(){
				if(distance <= 5){
					wordSwap("Damn Hot!");
				}else if(distance <= 10){
					wordSwap("Getting Hot");
				}else if(distance <= 20){
					wordSwap("Luke Warm");
				}else if(distance <= 30) {
					wordSwap("Cold");
				}else{
					wordSwap("Icy Cold");
				};
			};

			function listGuesses(){
				console.log("List Guesses");
				$('#guessList').append('<li>'+ userGuess +'</li>');
			};

			counter++;
			$('#count').text(counter);
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
// hotOrCold()
// guessFeedback()
// countGuesses()
// listGuesses()

//******** NOT DONE ********

// validateGuess




// ****** ****** ****** ****** ****** 
// ***** Requirments Breakdown ******
// ****** ****** ****** ****** ****** 

// ****** DONE ****** 
// create a newGame function to run on pageload and on button push
// create a chooseNumber function to pick a random number between 1 and 100
// write a named function that recieves user guess and determines which conditional feedback to provide
// create absolute values(logic) in correspondance to the secret number and the guessed number (hot cold, hotter colder, really hot! really cold!)
// feedback should replace text in the h2#feedback
// amount of guesses apperas in span.#count
// each previously guessed number appended onto the ul#guessList

// ******** NOT DONE ********
// create check for numerical input for each guess, if wrong display error message




