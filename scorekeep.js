//Construct
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var display = document.getElementById("display");
var input = document.querySelector("input");
var gameOver = false;
var maxScore = 5;
var p1Score = 0;
var p2Score = 0;


p1Button.addEventListener("click", function(){
		if (p1Score !== maxScore && gameOver !== true) {
			p1Score++;
			p1Display.textContent = p1Score;
			console.log(p1Score);
			
		} else if (p2Score === maxScore) {
			console.log("Player One lost");
			gameOver = true;
		} else {
			console.log("Player One wins");
			gameOver = true;
			p1Display.classList.add("winner");
		}
	
});
p2Button.addEventListener("click", function(){
		if (p2Score !== maxScore && gameOver !== true) {
			p2Score++;
			p2Display.textContent = p2Score;
			console.log(p2Score);
			
		} else if (p1Score === maxScore) {
			console.log("Player Two lost");
			gameOver = true;
		} else {
			console.log("Player Two wins");
			gameOver = true;
			p2Display.classList.add("winner");
		}
	
});

reset.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Display.textContent = 0;
	p2Display.textContent = 0;
});

input.addEventListener("change", function(){
	display.textContent = input.value;
	maxScore = Number(input.value);
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Display.textContent = 0;
	p2Display.textContent = 0;

});