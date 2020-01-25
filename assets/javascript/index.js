const game = {
  losses: 0,
  guess: '',
  guessesLeft: 5,
  guessedLetters: [],
  goodbye: 'Goodbye!',
  hiddenWord: '',
  randoWord: '',
  wins: 0,
  wordList: ['racecar', 'anna', 'mom', 'level', 'kayak', 'rotator', 'stats', 'wow', 'rotor', 'tenet', 'sagas'],
  mainBox: document.getElementById('main-box'),
  wordRandom: document.getElementById('word-box'),
  remainCount: document.getElementById('remain-box'),
  guessBox: document.getElementById('guess-box'),
  winCount: document.getElementById('win-box'),
  lossCount: document.getElementById('loss-box'),
/*
  methods:******************************************************************************************************************
*/

  // ALMOST WORKS, doesn't connect to the storeLetter() letter's guess decrement and does not post guessed letters to DOM
  initializeGame(){
    this.randoWord = this.wordList[Math.round(Math.random() * 10)]
    this.wordRandom.textContent = this.getHiddenWord()
    this.remainCount.textContent = this.randoWord.length
    this.guessBox.textContent = this.guessedLetters
    this.winCount.textContent = this.wins
    this.lossCount.textContent = this.losses
    console.log(`INSIDE: HERE => initializeGame() OUTPUT ${this.randoWord}`)
    // this.updateGame() //NEED THIS, WHEN IT IS FIXED
  },

  // winOrLose(){
  //   console.log(`INSIDE: HERE => winOrLose() OUTPUT ${this.randoWord}`)

  //   if (this.guess === this.randoWord && this.guessesLeft >= 0) {
  //     this.wins++
  //     this.updateGame()
  //   } else {
  //     this.losses++
  //     this.updateGame()
  //   }
  // },

  updateGame(){
    console.log(`INSIDE: updateGame() OUTPUT ${"guess: " + this.guess}`)
    if(this.guessesLeft >= 0 && this.randoWord === this.guess)
    {
     this.wins++
     this.randoWord =''
     this.guess = ''
     this.guessesLeft = 5
     this.guessedLetters = []

    } else {
      this.losses++
      this.randoWord = ''
      this.guess = ''
      this.guessesLeft = 5
      this.guessedLetters = []

    }
  },

  storeLetter(letter){
    if (this.guessedLetters.includes(!letter)) {
      this.guessesLeft--
      this.updateGame()
    } else if (this.guessesLeft !== 0) {
      this.guessesLeft--
      this.guessedLetters.push(letter)
      this.updateGame()
    }

  },




    // Generates the current word with letters that haven't been guessed as underscores.
  getHiddenWord () {
    let hiddenWord = ''

    for (let i = 0; i < this.randoWord.length; i++) {
      hiddenWord[i] = '_'
      const currentLetter = this.randoWord[i]
      if (this.guessedLetters.includes(currentLetter)) {
        hiddenWord += `${currentLetter}`
      } else {
        this.guess += currentLetter
      }

    }
    return hiddenWord
  },

  // storeLetter (letter) {
  //   const noRepeat = letter.toLowerCase()
  //   if (this.guessedLetters.includes(!noRepeat)) {
  //   } else if (this.guessesLeft !== 0) {
  //     this.guessesLeft--
  //     this.guessedLetters.push(noRepeat)
  //     // this.initializeGame()
  //   }
  // },
}

game.initializeGame()

// assigns variable letter to user keypress
document.onkeypress = function (event) {
  game.storeLetter(event.key.toLowerCase())
  game.updateGame()
}
































/*
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
    calls hideWordDefineGuess function everytime the updateGame property/function is ran.
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


  end comments **************************************************************************************************************
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