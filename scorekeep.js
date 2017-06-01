var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var display = document.getElementById("display");
var amount = document.getElementById("amount");
var maxScore = 5;
var p1Score = 0;
var p2Score = 0;

amount.addEventListener("click", function(){
		console.log(amount);

})

p1Button.addEventListener("click", function(){
		if (p1Score === maxScore && p2Score !== maxScore) {
			console.log("Player One wins");
		} else {
			p1Score++;
			p1Display.textContent = p1Score;
			console.log(p1Score);
		}
	
});
p2Button.addEventListener("click", function(){
		if (p2Score === maxScore && p1Score !== maxScore) {
			console.log("Player Two wins");
		} else {
			p2Score++;
			p2Display.textContent = p2Score;
			console.log(p2Score);
		}
	
});