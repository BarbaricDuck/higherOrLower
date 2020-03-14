var correctsfx = new Audio('./sfx/correct.wav');
var incorrectsfx = new Audio('./sfx/incorrect.wav');
var gameOversfx = new Audio('./sfx/gameOver.wav');
var computorGuess;
var guessLog = [];
var difficulty = "easy";
var switchsfx = new Audio('./sfx/switch.wav');
var previousLength;
var won = false;


function init(){
	computorGuess = Math.floor(Math.random()*100+1);
}
function newGame(){
	window.location.reload(false);
}
function compareGuess(){

	var userGuess = document.getElementById('inputBox').value;
	// dont allow guesses above 100
	if (userGuess>100) {
		alert("Please guess below 100.");
		document.getElementById('textOutput').innerHTML = "Your guess is too high.";
		incorrectsfx.play();
	}

	else if (userGuess<0) {
		alert("Please guess above 0.");
		document.getElementById('textOutput').innerHTML = "Your guess is too low.";
		incorrectsfx.play();

	}
	// guess to high
	else if (userGuess>computorGuess) {
		document.getElementById('textOutput').innerHTML = "Your guess is too high.";
		incorrectsfx.play();

	}

	else if (userGuess<computorGuess) {
		document.getElementById("textOutput").innerHTML = "Your guess is too low.";
		incorrectsfx.play();

	}

	else{
		document.getElementById("textOutput").innerHTML = "Correct!";
		window.won = true;
		correctsfx.play();
		
		
		}
	document.getElementById('inputBox').value = "";
	guessLog.push(userGuess)
	document.getElementById('previous').innerHTML = guessLog;
	document.getElementById('previousLength').innerHTML = guessLog.length;
	
	

	

     
}
function check(){
	if (difficulty == "easy") {
		if (guessLog.length == 10) {
			
			gameOver();
		}else{

		}
	}else{
		if (guessLog.length == 5){
			gameOver();
		}else{

		}
	}



}
function changeDifficulty(){
	if (difficulty == "hard") {
		document.getElementById("id").src = "./img/switch-level-off.png";
		difficulty = "easy";
		document.getElementById('iu').innerHTML = "Difficulty: Easy<br>(10 guesses)";
		switchsfx.play();

	}else{
		difficulty = "hard";
		document.getElementById("id").src = "./img/switch-lever-on.png";
		document.getElementById('iu').innerHTML = "Difficulty: Hard<br>(5 guesses)";
		switchsfx.play();


	}
	
	

}
function gameOver(){

	gameOversfx.play();
	alert('The answer was: '+computorGuess);
	
	newGame();

	
	

}
function main(){
	compareGuess();
	check();

}