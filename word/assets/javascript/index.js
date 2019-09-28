
var game = {

  randoWord: null,
  guessesLeft: 9,
  guessedLetters: [],
  wins: 0,
  losses: 0,
  lossPlayAgain: "You've lost. Insert floppy disk to continue. Just kidding. Press Ok.",
  winPlayAgain: "You won! Press Ok to play again!",
  goodbye: "Goodbye!",
  wordList: [
    'racecar',
    'anna',
    'mom',
    'level',
    'kayak',
    'rotator',
    'stats',
    'wow',
    'rotor',
    'tenet',
    'sagas',
  ],

  elements: {
    wordRandom: document.getElementById("word-box"),
    remainCount: document.getElementById("remain-box"),
    guessBox: document.getElementById("guess-box"),
    winCount: document.getElementById("win-box"),
    lossCount: document.getElementById("loss-box"),
  },

  //generates random word from wordList and initalizes stores the resulting word inside the randoWord property/variable of the game object
  //references this(the game object).randoWord(the game object property), assigns that to method that spits out a wordList item at index b/n 1 and 10, as the Math.random() function produces a number between 0 and 1, which gets multiplied by 10 and rounded to a whole number/integer
  generateWord: function () {
    this.randoWord = this.wordList[Math.round(Math.random() * 10)];
    return this.randoWord;
  },

  //updates DOM with current values of the game stats.
  updateGameScreen: function () {
    this.elements.wordRandom.textContent = this.getHiddenWord(); //calls getHiddenWord function everytime the updateGameScreen property/function is ran.


    // @ts-ignore

    this.elements.remainCount.textContent = this.guessesLeft--; // move this decrement to check if you win function
    // @ts-ignore
    this.elements.guessBox.textContent = this.guessedLetters;
    // @ts-ignore
    this.elements.winCount.textContent = this.wins;
    // @ts-ignore
    this.elements.lossCount.textContent = this.losses;

    if (this.guessesLeft > 0) {
      return;
    }  else  if (this.guessesLeft == 0 && this.guessedLetters == this.randoWord) {
      alert(this.winPlayAgain);
      this.wins++;
    } else if (this.guessesLeft == 0 && this.guessedLetters != this.randoWord) {
      alert(this.lossPlayAgain);
      this.losses++;
    } else {
      alert(this.goodbye);
      return;
    }

  },

//Generates the current word with letters that haven't been guessed as underscores.
getHiddenWord: function () {
    var hiddenWord = "";
    for (var i = 0; i < this.randoWord.length; i++) {
      var currentLetter = this.randoWord[i];

      if (this.guessedLetters.includes(currentLetter)) {
        hiddenWord += currentLetter + ' ';
      } else {
        hiddenWord += '_ ';
      }
    }
    return hiddenWord;
  },

  // Accepts a letter input and stores its value to the game.guessedLetters property/var
  // Returns whether or letter is correct guess << think this needs removed <5:04pm 9.27.2019
  storeLetter: function (letter) {
    var noRepeat = letter.toLowerCase();

    if (this.guessedLetters.includes(noRepeat)) {
      return;
    }
    this.guessedLetters.push(noRepeat);
    this.updateGameScreen();
  },









};

// Checks to see if the current word contains the passed letter
// isCorrectGuess: function (letter) {

// }

//calling the generateWord() property/function to generate and return a random word from wordList[];
game.generateWord();
game.updateGameScreen();
console.log(game.randoWord + " LOOK HERE ");

//assigns variable letter to user keypress
document.onkeypress = function (event) {
  game.storeLetter(event.key);
};







// 	$('.clear').on('click', function () {
// 		$('#first-number').empty();
// 		$('#second-number').empty();
// 		$('#operator').empty();
// 		$('#result').empty();
// 		input = 1;
// 		firstNum = '';
// 		secNum = '';
// 	};












/* a different method of sorting:       *** This method sorts the array, with function (a, b) {} as the argument. function (a, b) {}                                            compares a and b's index values (i think) and then the wordList.sort() returns a random                                             number between 0 and 1, then subtracts 0.5, so that if a is 0.4 it would return -0.1,                                               and if b were 0.8, it would return 0.3, resulting in b being seen as greater value, and                                             would be sorted before a in the array. ***
  generateWord: function () {
    wordList.sort(function (a, b) {
      return Math.random() - 0.5;
    });
  }
  */
