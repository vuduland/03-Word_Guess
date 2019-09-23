var wordGuessGame = function() {
  var wordList = [
    "racecar",
    "anna",
    "mom",
    "level",
    "kayak",
    "rotator",
    "stats",
    "wow",
    "rotor",
    "tenet",
    "sagas"
  ];
  var chosenWord = wordList[Math.round(Math.random() * 10)];
  var ask = "";
  var guessedLetters = [];
  var guesses = 14;
  var wins = 0;
  var losses = 0;
  var clearWindow;

  var elope = function() {
    console.log("wordlist[0] = " + wordList[0]);
    wordList[0] = document.getElementById("theWord").innerText;
    console.log("wordlist[0] = " + wordList[0]);
    console.log(chosenWord);
  };
  elope();

  window.addEventListener("keyup", start, true);

  var askUser = function(guesses, wins, losses) {
    document.getElementById("guessedOne").innerText = "Type your guesses!";
    console.log(ask);

    for (var i = 0; i < wordList.length; i++) {
      guessedLetters[i] = document.addEventListener("keyup", this, true);
    }
    for (var i = 0; i < 14; i++) {
      if (guessedLetters[i] === chosenWord[i]) {
        document.getElementById("theWord").innerText = guessedLetters[i];
        guessedLetters[i] = chosenWord[i];
        guesses--;
        wins++;
        document.getElementById("guessesLeft").innerText = guesses;

        guesses = document.getElementById("guessesLeft").innerText;

        document.getElementById("wins").innerHTML = wins;
      } else {
        guesses--;
        losses++;
        document.getElementById("guessesLeft").innerHTML = guesses;
        document.getElementById("lossCount").innerHTML = losses;
      }
    }
  };
  var start = function() {
    //alert("Press any key to get started!");
    askUser();
  };

  start();

	function clearWindow() {
		document.getElementById("askButton").innerText = "Click Here to Restart.";
	  $(".clear").on("click", function() {
      $("#first-number").empty();
      $("#second-number").empty();
      $("#operator").empty();
      $("#result").empty();
      input = 1;
      firstNum = "";
      secNum = "";
    });
  };
};
wordGuessGame();

//array of palindromes === wordList[]
//display to page "Press any Key to get started!" === start()
//empty array to add guesses to
//counter for guesses left (variable decrement down from w/e number every run through the loop or switch)
//div with list of letters already guessed (string just + to it if letters are not in current word)
//div with '_ _ _ _ _ _ _' instead of a word, that upon correct guess replaces the '_' with letter. (reference fridge activity)
//counter for wins (variable)
//counter for losses (variable)
//clear game after win/loss and restart with new word--increment win or loss (switch or if/else statement)---use code from calculator activity
