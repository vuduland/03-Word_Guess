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
  var ask = " ";
  var guessedLetters = [];
  var guesses = 14;

  var elope = function() {
    console.log("wordlist[0] = " + wordList[0]);
    wordList[0] = document.getElementById("theWord").innerText;
    console.log("wordlist[0] = " + wordList[0]);
    console.log(chosenWord);
  };
	elope();
	window.addEventListener("keyup", start, true);
	var askUser = function (event) {
		ask = event.key;
    //ask = document.addEventListener("keyup",  ).char;
    console.log(ask);

    // switch () {
    // 	case value:

    // 		break;

    // 	default:
    // 		break;
    // }

    // guessedLetters[i] = document.addEventListener("keyup");
  };
  var start = function() {
    //alert("Press any key to get started!");
    askUser();
  };

  start();

  var clearWindow = function() {};
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
