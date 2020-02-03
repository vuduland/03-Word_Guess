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

    console.log(`${game.chosenWord} LOOK HERE `);
  },

  // WORKS
  initWord() {
    this.chosenWord = this.wordList[Math.floor(Math.random() * 10)];
    return this.chosenWord;
  },

  updateGameScreen() {
    this.elements.wordChosen.textContent = this.getHiddenWord();
  },

  // Generates the current word with letters that haven't been guessed as underscores.
  // WORKS
  getHiddenWord() {
    let hiddenWord = '';
    let guess = '';

    for (let i = 0; i < this.chosenWord.length; i++) {
      let currentLetter = this.chosenWord[i];

      if (this.guessedLetters.includes(currentLetter)) {
        //
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
    const noRepeat = letter.toLowerCase();
    if (this.guessedLetters.includes(!noRepeat)) {
    } else if (this.guessesLeft !== 0) {
      this.guessesLeft--;
      this.guessedLetters.push(noRepeat);
      this.updateGameScreen();
    }
  }
};

game.startGame(game.dom);

// assigns variable letter to user keypress
document.onkeypress = function(event) {
  game.storeLetter(event.key);
};
