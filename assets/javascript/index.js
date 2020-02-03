const game = {
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
    'sagas'
  ],

  chosenWord: [],
  guessesLeft: 9,
  guessedLetters: [],
  incorrectLetters: [],
  matchedLetters: [],

  lost: '',
  won: 'You won! Do you want to play again?',
  losses: 0,
  wins: 0,

  elements: {
    mainBox: document.getElementById('main-box'),
    wordChosen: document.getElementById('word-box'),
    remainCount: document.getElementById('remain-box'),
    guessBox: document.getElementById('guess-box'),
    winCount: document.getElementById('win-box'),
    lossCount: document.getElementById('loss-box')
  },

  startGame() {
    this.initWord();
    this.updateGameScreen();
    this.elements.remainCount.textContent = 9;
    this.elements.guessBox.textContent = [];
    this.elements.winCount.textContent = this.wins;
    this.elements.lossCount.textContent = this.losses;

    console.log(`chosenWord: ${this.chosenWord}`);
  },

  // WORKS
  initWord() {
    this.chosenWord = this.wordList[Math.floor(Math.random() * 10)];
    return this.chosenWord;
  },

  updateGameScreen() {
    this.elements.wordChosen.textContent = this.getHiddenWord();
    this.elements.remainCount.textContent = this.guessesLeft;
    this.elements.guessBox.textContent = this.guessedLetters;
  },

  // WORKS
  getHiddenWord() {
    let hiddenWord = '';

    for (let i = 0; i < this.chosenWord.length; i++) {
      let currentLetter = this.chosenWord[i];

      if (this.guessedLetters.includes(currentLetter)) {
        hiddenWord += currentLetter;
        this.matchedLetters[i] += currentLetter;
        // console.log(guess);
      } else {
        hiddenWord += '_ ';
      }
    }
    return hiddenWord;
  },

  // works
  storeLetter(letter) {
    const wordUp = letter.toLowerCase();
    if (!this.guessedLetters.includes(wordUp)) {
      this.guessesLeft--;
      this.guessedLetters.push(wordUp);
      this.updateGameScreen();
    } else if (
      this.guessedLetters.includes(
        this.guessedLetters.includes(wordUp) && this.guessesLeft !== 0
      )
    ) {
      this.updateGameScreen();
    }
  }
};

game.startGame();

// assigns variable letter to user keypress
document.onkeypress = function(event) {
  game.storeLetter(event.key);
};
