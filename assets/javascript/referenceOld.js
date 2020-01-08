
/* <body>
  <h1> PALINDROMES </h1>
  <p id="wins"> Wins: </p>
  <p id="lossCount"> Losses: </p>
  <p id="ask" class="jumbotron">
    call ask user function.
<button id="askButton" class="button btn-primary col-form-label-lg"> Click to restart with another word. </button>
  </p>
  <p id="guessesLeft"> Guesses Remaining: </p>
  <h2 id="theWord">" "</h2>
  <p id="guessedOne"> Guessed Letters: </p>
</body> */

const wordList = [
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
]
const generatedWord = wordList[Math.round(Math.random() * 10)]
const guessedLetters = [' ']
const guesses = 14
const wins = 0
const losses = 0

function go () {
  console.log(`wordlist[0] = ${wordList[0]}`)
  wordList[0] = document.getElementById('theWord').innerText
  console.log(`wordlist[0] = ${wordList[0]}`)
  console.log(generatedWord)
};

// function go() {
//     let backGround = document.getElementById("ask");
//     console.log(backGround);
// }
go()

const askUser = function (guesses, wins, losses) {
  document.getElementById('guessedOne').innerText = 'Type your guesses!'
  console.log()

  for (let i = 0; i < wordList.length; i++) {
    var e = document.getElementById('guessedOne')
    var userInputs = document.addEventListener('keyup', e.onkeyup)
    console.log(e.onkeyup)
  }
  for (let j = 0; j < 14; j++) {
    if (guessedLetters[j] === generatedWord[j]) {
      document.getElementById('theWord').innerText = guessedLetters[j]
      guessedLetters[j] = generatedWord[j]
      guesses++
      wins++
      document.getElementById('guessesLeft').innerText = guesses

      guesses = document.getElementById('guessesLeft').innerText

      document.getElementById('wins').innerHTML = wins
    } else {
      guesses -= 1
      console.log('guesses')
      losses += 1
      console.log('losses')
      document.getElementById('guessesLeft').innerHTML = guesses
      document.getElementById('lossCount').innerHTML = losses
    }
  }
}
//    function start() {
//     //alert('Press any key to get started!');

// 	}
askUser(guesses, wins, losses)
// start();

// start();

// };

// array of palindromes === wordList[]
// display to page 'Press any Key to get started!' === start()
// empty array to add guesses to
// counter for guesses left (letiable decrement down from w/e number every run through the loop or switch)
// div with list of letters already guessed (string just + to it if letters are not in current word)
// div with '_ _ _ _ _ _ _' instead of a word, that upon correct guess replaces the '_' with letter. (reference fridge activity)
// counter for wins (letiable)
// counter for losses (letiable)
// clear game after win/loss and restart with new word--increment win or loss (switch or if/else statement)---use code from calculator activity

// let clearWindow = function () {
// 	document.getElementById('askButton').innerText = 'Click Here to Restart.';
// 	document.getElementById

// 	$('.clear').on('click', function () {
// 		$('#first-number').empty();
// 		$('#second-number').empty();
// 		$('#operator').empty();
// 		$('#result').empty();
// 		input = 1;
// 		firstNum = '';
// 		secNum = '';
// 	};
