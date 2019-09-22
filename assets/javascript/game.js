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
	"sagas",
];
var chosenWord = wordList[Math.round(Math.random() * 10)];
var elope = function() {
	console.log(wordList[0]); //?
	document.getElementById("div01").innerHTML = wordList[0];
	console.log(chosenWord);
};

elope();
//array of palindromes
//display to page "Press any Key to get started!"
//array with alphabet?
//counter for guesses left (variable decrement down from w/e number every run through the loop or switch)
//div with list of letters already guessed (string just + to it if letters are not in current word)
//div with '_ _ _ _ _ _ _' instead of a word, that upon correct guess replaces the '_' with letter. (reference fridge activity)
//counter for wins (variable)
//counter for losses (variable)
//clear game after win/loss and restart with new word--increment win or loss (switch or if/else statement)---use code from calculator activity
