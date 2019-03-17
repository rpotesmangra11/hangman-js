//Global Variables===========================================================
// Used to check if the letters were already used
let lettersAlpha;
let songArr = ["caliente", "imposible", "bloqueo", "amanece", "desconocidos"];
let wins = 0;
let losses = 0;
let blanksAndSuccesses = [];
let userGuess;
let guessesLeft = 12;
let lettersUsed = [];
let randSong;

//Reset========================================================================
const reset = () => {
	lettersAlpha = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
									'y','z'];

  //Erase word from last game
  blanksAndSuccesses.splice(0);
  //Clear the letters used last game
  lettersUsed.splice(0);
  //Get random song
  randSong = songArr[Math.floor(Math.random() * songArr.length)];

  //Create underscores based on number of letters
  for (let i = 0; i < randSong.length; i++) {
    blanksAndSuccesses.push("_");
  }
  //Reset Game Area
  $("#wordToGuess").html(blanksAndSuccesses.join(" "));
  //Reset Letters Guessed
  guessesLeft = 12;
  $("#numGuesses").html(`Guesses Left: ${guessesLeft}`);
  $("#lettersGuessed").html("Letters Guessed: ");
};

//Check guess right/wrong
let guessChecker = userGuess => {
  //True means letter is NOT used
  if (
    lettersAlpha.indexOf(userGuess) != -1 &&
    randSong.indexOf(userGuess) != -1
  ) {
    //Check against word
    for (let i = 0; i < randSong.length; i++) {
      if (userGuess === randSong[i]) {
        blanksAndSuccesses[i] = userGuess;
      }
    }
    //Remove the letter from the unused letters array
    lettersAlpha.splice(lettersAlpha.indexOf(userGuess), 1);
    //Update board
    $("#wordToGuess").html(blanksAndSuccesses.join(" ").toUpperCase());
    //Update guesses left (numGuesses)
    guessesLeft--;
    $("#numGuesses").html(`Guesses Left: ${guessesLeft}`);
    //Update letters guessed
    lettersUsed.push(userGuess);
    $("#lettersGuessed").html(
      "Letters Guessed: " + lettersUsed.join(",").toUpperCase()
    );
  } else if (
    lettersAlpha.indexOf(userGuess) != -1 &&
    randSong.indexOf(userGuess) == -1
  ) {
    //Remove from usable letters
    lettersAlpha.splice(lettersAlpha.indexOf(userGuess), 1);
    //Update numGuesses
    guessesLeft--;
    $("#numGuesses").html(`Guesses Left: ${guessesLeft}`);
    //Update letters guessed
    lettersUsed.push(userGuess);
    $("#lettersGuessed").html(
      "Letters Guessed: " + lettersUsed.join(",").toUpperCase()
		);
  }
};

//Check win condition
let winCondtion = function() {
  if (blanksAndSuccesses.join("") === randSong) {
    //Update wins
    wins++;
    $("#numWins").html(`Wins: ${wins}`);
    alert(`Congrats! You've won. The song was ${randSong.toUpperCase()}.`);
    reset();
  } else if (guessesLeft == 0) {
    //Update losses
		losses++;
		$("#numLosses").html(`Losses: ${losses}`);
    alert(`Sorry! You've lost. The song was ${randSong.toUpperCase()}.`);
    //Reset game board
    reset();
  }
};

//Keypress function/Play Game
$(document).keyup(e => {
  userGuess = e.key;
  guessChecker(userGuess);
  winCondtion();
});

reset();
