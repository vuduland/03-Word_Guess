/* eslint-disable no-alert, no-console */

const game = {
  randoWord: ' ',
  guessesLeft: 9,
  guessedLetters: [],
  won: 'You won! Do you want to play again?',
  lost: null,
  wins: 0,
  losses: 0,
  goodbye: 'Goodbye!',
  wordList: ['racecar', 'anna', 'mom', 'level', 'kayak', 'rotator', 'stats', 'wow', 'rotor', 'tenet', 'sagas'],

  // references html elements and assigns them to key word.
  elements: {
    mainBox: document.getElementById('main-box'),
    wordRandom: document.getElementById('word-box'),
    remainCount: document.getElementById('remain-box'),
    guessBox: document.getElementById('guess-box'),
    winCount: document.getElementById('win-box'),
    lossCount: document.getElementById('loss-box')
  },

  check () {

      console.log(false)
    if (this.wordRandom.innerHTML() === this.randoWord) {

      console.log('true')
      return true
    }
  },

  // Generates random word from wordList, initalizes and stores word inside the randoWord property of the game object.
  // This method references the game object with keyword 'this' and randoWord property with 'this.randoWord', then assigns wordList[] between 1 and 10
  // Math.random() produces a number between 0 and 1, is multiplied by 10 and rounded to nearest integer.
  generateWord () {
    this.randoWord = this.wordList[Math.round(Math.random() * 10)]
    console.log('OUTPUT: generateWord -> this.randoWord', this.randoWord)
    return this.randoWord
  },

  win() {
    this.wins++
    this.randoWord = null
    this.guessesLeft = 9
    this.guessedLetters = []
    this.updateGameScreen()
  },

  lose() {
      this.losePlayAgain()
      this.losses++
      this.randoWord = null
      this.guessesLeft = 9
      this.guessedLetters = []
      this.updateGameScreen()
  },

  initializeGame () {

    if (this.check()) {
      this.win()
    } else if (this.check() === false) {
      this.lose()
    }
    this.generateWord()
    this.updateGameScreen()
    console.log(`${game.randoWord} LOOK HERE `)
  },

  // updates DOM with current values of the game stats.
  updateGameScreen () {
    this.elements.wordRandom.textContent = this.getHiddenWord()
    // calls getHiddenWord function everytime the updateGameScreen property/function is ran.
    // move this decrement to check if you win function
    this.elements.remainCount.textContent = this.guessesLeft
    this.elements.guessBox.textContent = this.guessedLetters
    this.elements.winCount.textContent = this.wins
    this.elements.lossCount.textContent = this.losses
  },

  // Generates the current word with letters that haven't been guessed as underscores.
  getHiddenWord () {
    let hiddenWord = ''
    for (let i = 0; i < this.randoWord.length; i++) {
      const currentLetter = this.randoWord[i]
      if (this.guessedLetters.includes(currentLetter)) {
        hiddenWord += `${currentLetter} `
      } else {
        hiddenWord += '_ '
      }
    }
    return hiddenWord
  },

  // Accepts a letter input and stores its value to the game.guessedLetters property/var
  // Returns whether or not letter is correct guess << think this needs removed <5:04pm 9.27.2019
  storeLetter (letter) {
    const noRepeat = letter.toLowerCase()
    if (this.guessedLetters.includes(!noRepeat)) {
    } else if (this.guessesLeft !== 0) {
      this.guessesLeft--
      this.guessedLetters.push(noRepeat)
      this.updateGameScreen()
    }
  },

  losePlayAgain () {
    /* eslint-disable */
    prompt("You've lost. Insert floppy disk to continue. Just kidding. Press Ok.")
    /* eslint-enable */
    this.losses++
    this.randoWord = null
    this.guessesLeft = 9
    this.guessedLetters = []
  },

  winPlayAgain () {
    /* eslint-disable */
    prompt('You won! Do you want to play again?')
    /* eslint-enable */

    this.wins++
    this.randoWord = null
    this.guessesLeft = 9
    this.guessedLetters = []
  },

  // areTheyWin () {
  //   const hiddenWord = []
  //   for (let i = 0; i < this.randoWord.length; i++) {
  //     hiddenWord[i] = this.randoWord[i]
  //   }
  //   if (hiddenWord.includes('_ ') === false) {
  //     return true
  //   } else {
  //     return false
  //   }
  // },

  // areTheyLose () {
  //   const hiddenWord = []
  //   for (let i = 0; i < this.randoWord.length; i++) {
  //     hiddenWord[i] = this.randoWord[i]
  //   }
  //   if (hiddenWord.includes('_ ') === true && this.guessesLeft === 0) {
  //     return true
  //   }
  //   return false
  // }
}

// calling the generateWord() property/function to generate and return a random word from wordList[];
// game.generateWord()
game.check()
game.initializeGame()
// game.updateGameScreen()
// console.log(`${game.randoWord} LOOK HERE `)
// assigns variable letter to user keypress
document.onkeypress = function (event) {
  game.storeLetter(event.key)
}

/* a different method of sorting:       *** This method sorts the array, with function (a, b) {} as the argument. function (a, b) {}                                            compares a and b's index values (i think) and then the wordList.sort() returns a random                                             number between 0 and 1, then subtracts 0.5, so that if a is 0.4 it would return -0.1,                                               and if b were 0.8, it would return 0.3, resulting in b being seen as greater value, and                                             would be sorted before a in the array. ***
  generateWord: function () {
    wordList.sort(function (a, b) {
      return Math.random() - 0.5;
    });
  }
  */
