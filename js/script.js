class Game {
	constructor() {
		this.audioArray = [new Audio('./sfx/correct.wav'), new Audio('./sfx/incorrect.wav'), new Audio('./sfx/gameover.wav'), new Audio('./sfx/switch.wav')];
		this.computorGuess = Math.floor(Math.random() * 100 + 1);
		this.guessLog = [];
		this.difficulty = "easy";
		this.previousLength;
		this.won = false;
		this.docSelectors = [
			document.getElementById('inputBox'),
			document.getElementById('textOutput')
		]
	}
	playSound(sound) {
		switch (sound) {
			case "correct":
				this.audioArray[0].play();
				break;
			case "incorrect":
				this.audioArray[1].play();
				break;
			case "gameover":
				this.audioArray[2].play();
				break;
			case "switch":
				this.audioArray[3].play();
				break;
			default:
				throw new ReferenceError("Invalid sound name");
		}
	}
	newGame() {
		window.location.reload(false);
	}
	compareGuess() {
		const userGuess = document.getElementById('inputBox').value;
		// dont allow guesses above 100
		if (userGuess !== this.compareGuess) {
			if (userGuess > 100) alert("Please enter a number below 100");
			if (userGuess < 0) alert("Please enter a number above 0");
			if (userGuess > this.computorGuess) this.docSelectors[1].innerText = "Your guess is too high";
			if (userGuess < this.computorGuess) this.docSelectors[1].innerText = "Your guess is too low";
			this.playSound("incorrect");
			this.docSelectors[0].value = "";
			this.guessLog.push(userGuess)
			document.getElementById('previous').innerText = this.guessLog;
			document.getElementById('previousLength').innerText = this.guessLog.length
			return
		}
		document.getElementById("textOutput").innerText = "Correct!";
		this.won = true;
		this.playSound("correct");
	}
	check() {
		if (this.difficulty === "easy") {
			if (this.guessLog.length == 10) this.gameOver();
			return
		}
		if (this.guessLog.length == 5) this.gameOver();
		return
	}
	changeDifficulty() {
		if (this.difficulty === "hard") {
			document.getElementById("id").src = "./img/switch-level-off.png";
			this.difficulty = "easy";
			document.getElementById('iu').innerHTML = "Difficulty: Easy<br>(10 guesses)";
			this.playSound("switch");
			return;
		}
		this.difficulty = "hard";
		document.getElementById("id").src = "./img/switch-lever-on.png";
		document.getElementById('iu').innerHTML = "Difficulty: Hard<br>(5 guesses)";
		this.playSound("switch");
	}
	gameOver() {
		this.playSound("gameover");
		alert('The answer was: ' + computorGuess);
		this.newGame();
	}
	main() {
		this.compareGuess();
		this.check();
	}
}

