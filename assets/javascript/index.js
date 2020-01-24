const game = {

  wordList: ['racecar', 'anna', 'mom', 'level', 'kayak', 'rotator', 'stats', 'wow', 'rotor', 'tenet', 'sagas'],
  wins: 0,
  losses: 0,
  won: 'You won! Do you want to play again?',
  lost: '',
  randoWord: [],
  guessesLeft: 9,
  guessedLetters: [],


  goodbye: 'Goodbye!',


  elements: {
    mainBox: document.getElementById('main-box'),
    wordRandom: document.getElementById('word-box'),
    remainCount: document.getElementById('remain-box'),
    guessBox: document.getElementById('guess-box'),
    winCount: document.getElementById('win-box'),
    lossCount: document.getElementById('loss-box')
  },

/*
  **************************************************************************************************************************
  methods:******************************************************************************************************************
  **************************************************************************************************************************
*/









  // ALMOST WORKS, doesn't connect to the storeLetter() letter's guess decrement and does not post guessed letters to DOM
  initializeGame() {
    console.log("OUTPUT: initializeGame -> initializeGame")
    this.generateWord()
    this.updateGameScreen()
    console.log(`${game.randoWord} LOOK HERE `)
  },

  win() {
    console.log("OUTPUT: win -> win")
    this.wins++
    this.randoWord = null
    this.guessesLeft = 9
    this.guessedLetters = []
    this.winPlayAgain()
    this.updateGameScreen()
  },

  lose() {
      console.log("OUTPUT: lose -> lose")
      this.losses++
      console.log("OUTPUT: lose -> losses", this.losses)
      this.randoWord = []
      this.guessesLeft = 9
      this.guessedLetters = []
      this.losePlayAgain()
      this.updateGameScreen()
  },

  // WORKS
  generateWord(){
    console.log("OUTPUT: generateWord -> generateWord")
    this.randoWord = this.wordList[Math.round(Math.random() * 10)]
    console.log('OUTPUT: generateWord -> this.randoWord', this.randoWord)
    return this.randoWord
  },


  updateGameScreen() {
    console.log("OUTPUT: updateGameScreen -> updateGameScreen")
    this.elements.wordRandom.textContent = this.getHiddenWord()
    this.elements.remainCount.textContent = 9
    this.elements.guessBox.textContent = []
    this.elements.winCount.textContent = this.wins
    this.elements.lossCount.textContent = this.losses
  },

  // Generates the current word with letters that haven't been guessed as underscores.
  // WORKS
  getHiddenWord() {
    let hiddenWord = ''
    let guess = ''
    for (let i = 0; i < this.randoWord.length; i++) {
      const currentLetter = this.randoWord[i]
      if (this.guessedLetters.includes(currentLetter)) {
        hiddenWord += `${currentLetter} `
        guess += `${currentLetter}`
        console.log(guess);
      } else {
        hiddenWord += '_ '
      }
    }
    return hiddenWord
  },

  // works
  storeLetter(letter) {
    const noRepeat = letter.toLowerCase()
    if (this.guessedLetters.includes(!noRepeat)) {
    } else if (this.guessesLeft !== 0) {
      this.guessesLeft--
      this.guessedLetters.push(noRepeat)
      this.updateGameScreen()
    }
  },

  losePlayAgain() {
    prompt("You've lost. Insert floppy disk to continue. Just kidding. Press Ok.")

    this.losses++
    this.randoWord = []
    this.guessesLeft = 9
    this.guessedLetters = []
  },

  winPlayAgain() {
    prompt('You won! Do you want to play again?')

    this.wins++
    this.randoWord = []
    this.guessesLeft = 9
    this.guessedLetters = []
  },

  areTheyWin() {
    let hiddenWord = []
    for (let i = 0; i < this.randoWord.length; i++) {
      hiddenWord[i] = this.randoWord[i]
    }
    if (hiddenWord.includes('_ ') === false) {
      return true
    } else {
      return false
    }
  },

  areTheyLose() {
    let hiddenWord = []
    for (let i = 0; i < this.randoWord.length; i++) {
      hiddenWord[i] = this.randoWord[i]
    }
    if (hiddenWord.includes('_ ') === true && this.guessesLeft === 0) {
      return true
    }
    return false
  }

  /*
  ***********************************************************************************************************************
  </methods> ************************************************************************************************************
  ***********************************************************************************************************************

  */

}

game.initializeGame()

// assigns variable letter to user keypress
document.onkeypress = function (event) {
  game.storeLetter(event.key)
}

/*
**************************************************************************************************************************
comments: ****************************************************************************************************************

line 13:
  // references html elements and assigns them to key word.

line 22:
/*
  check () {
      console.log(false)
    if (document.getElementById('word-box') === this.randoWord) {
      console.log(true)
      return true
    }
    else {
      return false
    }
  },


line 25:
  generateWord () {
    this.randoWord = this.wordList[Math.round(Math.random() * 10)]
    console.log('OUTPUT: generateWord -> this.randoWord', this.randoWord)
    return this.randoWord
  },

line 38:
  Generates random word from wordList, initalizes and stores word inside the randoWord property of the game object.
  This method references the game object with keyword 'this' and randoWord property with 'this.randoWord',
  then assigns wordList[] between 1 and 10
  Math.random() produces a number between 0 and 1, is multiplied by 10 and rounded to nearest integer.


line 66:
    if (this.check()) {
      this.win()
    } else if (this.check() === false) {
      this.lose()
    }

line 67:
    calls getHiddenWord function everytime the updateGameScreen property/function is ran.
    move this decrement to check if you win function

line 73:
    Generates the current word with letters that haven't been guessed as underscores.

line 74:
    updates DOM with current values of the game stats.

line 99:
    Accepts a letter input and stores its value to the game.guessedLetters property/var
    Returns whether or not letter is correct guess << think this needs removed <5:04pm 9.27.2019

line 155:
   calling the generateWord() property/function to generate and return a random word from wordList[];

  **************************************************************************************************************************
  </comments> **************************************************************************************************************
  **************************************************************************************************************************

*/


/*

additional:

a different method of sorting:

This method sorts the array, with function (a, b) {} as the argument. function (a, b) {}
compares a and b's index values (i think) and then the wordList.sort() returns a random
number between 0 and 1, then subtracts 0.5, so that if a is 0.4 it would return -0.1,
and if b were 0.8, it would return 0.3, resulting in b being seen as greater value, and
would be sorted before a in the array.


*/