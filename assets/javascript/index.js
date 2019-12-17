var game = {

  randoWord: null,
  guessesLeft: 9,
  guessedLetters: [],
  won: prompt("You won! Do you want to play again?"),
  lost: null,
  wins: 0,
  losses: 0,
  //  lossPlayAgain: "You've lost. Insert floppy disk to continue. Just kidding. Press Ok.",
  //   winPlayAgain: "You won! Press Ok to play again!",
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
  // references html elements and assigns them to key word.
  elements: {
    wordRandom: document.getElementById("word-box"),
    remainCount: document.getElementById("remain-box"),
    guessBox: document.getElementById("guess-box"),
    winCount: document.getElementById("win-box"),
    lossCount: document.getElementById("loss-box"),
  },

  // Generates random word from wordList, initalizes and stores word inside the randoWord property of the game object.
  // This method references the game object with keyword 'this' and randoWord property with 'this.randoWord', then assigns wordList[] between 1 and 10
  // Math.random() produces a number between 0 and 1, is multiplied by 10 and rounded whole number/integer.
  generateWord: function () {
    this.randoWord = this.wordList[Math.round(Math.random() * 10)];
    console.log("1. generateWord");
    return this.randoWord;

  },

  initializeGame: function () { //move this back into updateGameScreen and counter doesn't go to zero, but you do lose and game stops. If outside counter goes to zero and lose and game stops. The winPlayAgain function never shows up if you win. have to check if it is correct, which is what I thought line88 did.
    console.log("17. initGame");

    if (this.guessesLeft > 0 && this.guessedLetters != this.randoWord) {
      console.log("18. initGame if");
      return;
    } else if (this.areTheyWin() == true) {
      console.log("19. initGame else if 1");
      this.addEventListener("click", this.winPlayAgain());
      this.wins++;
      this.randoWord = null;
      this.guessesLeft = 9;
      this.guessedLetters = [];
    } else if (this.areTheyLose() == true) {
      console.log("20. initGame else if 2");
      this.addEventListener("", this.losePlayAgain());
      this.addEventListener()
      this.losses++;
      this.randoWord = null;
      this.guessesLeft = 9;
      this.guessedLetters = [];
    } else {
      console.log("21. initGame else");
      alert(this.goodbye);
      return;
    }
  },



  //updates DOM with current values of the game stats.
  updateGameScreen: function () {
    console.log("5. updateGameScreen");
    this.elements.wordRandom.textContent = this.getHiddenWord(); //calls getHiddenWord function everytime the updateGameScreen property/function is ran.
    console.log("6. getHiddenWord");
    // @ts-ignore
    this.elements.remainCount.textContent = this.guessesLeft; // move this decrement to check if you win function
    // @ts-ignore
    this.elements.guessBox.textContent = this.guessedLetters;
    // @ts-ignore
    this.elements.winCount.textContent = this.wins;
    // @ts-ignore
    this.elements.lossCount.textContent = this.losses;
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
    console.log("2. getHiddenWord");
    return hiddenWord;
  },

  // Accepts a letter input and stores its value to the game.guessedLetters property/var
  // Returns whether or not letter is correct guess << think this needs removed <5:04pm 9.27.2019
  storeLetter: function (letter) {
    var noRepeat = letter.toLowerCase();
    console.log("3. storeLetter");
    if (this.guessedLetters.includes(noRepeat)) {
      console.log("3a. storeLetter (inside if statement)");
      return;
    }
    this.guessesLeft--;
    this.guessedLetters.push(noRepeat);
    console.log("4. updateGameScreen");
    this.updateGameScreen();
  },

  losePlayAgain: function () {
    console.log("7. losePlayAgain");
    prompt("You've lost. Insert floppy disk to continue. Just kidding. Press Ok.");
  },

  winPlayAgain: function () {
    console.log("8. winPlayAgain");
    prompt("You won! Do you want to play again?");
    // this.wins++;
    // this.randoWord = null;
    // this.guessesLeft = 9;
    // this.guessedLetters = [];
  },


  areTheyWin: function () {
    var underScores = [];
    console.log("9. areTheyWin");
    for (var i = 0; i < this.randoWord.length; i++) {
      underScores[i] = this.randoWord[i];
      console.log("10. areTheyWin for loop");

    } if (underScores.includes('_ ') == false) {
      console.log("11. areTheyWin if statement");
      return true;
    } else {
      console.log("12. areTheyWin else statement");
      return false;
    }
  },

  areTheyLose: function () {
    var hiddenWord = [];
    console.log("13.areTheyLose");

    for (var i = 0; i < this.randoWord.length; i++) {
      hiddenWord[i] = this.randoWord[i];
      console.log("14.areTheyLose for loop");
    } if ((hiddenWord.includes('_ ') == true) && (this.guessesLeft == 0)) {
      console.log("15.areTheyLose if statement");
      return true;
    } else {
      console.log("16.areTheyLose else-statement");
      return false;
    }
  },

}

// 	$('.clear').on('click', function () {
// 		$('#first-number').empty();
// 		$('#second-number').empty();
// 		$('#operator').empty();
// 		$('#result').empty();
// 		input = 1;
// 		firstNum = '';
// 		secNum = '';
// 	};



//calling the generateWord() property/function to generate and return a random word from wordList[];
game.generateWord();
console.log("22. generateWord outside call");

game.initializeGame();
console.log("24. initGame outside call");

game.updateGameScreen();
console.log(game.randoWord + " LOOK HERE ");
console.log("23. updateScreen outside call");



//assigns variable letter to user keypress
document.onkeypress = function (event) {
  game.storeLetter(event.key);
  console.log("25.storeLetter outside keypress call");

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
