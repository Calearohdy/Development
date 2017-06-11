var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var numSquares = 6;
var win = false;


colorDisplay.textContent = pickedColor;


//addEventListener 
easy.addEventListener("click", function(){
	this.classList.add("selected");
	hard.classList.remove("selected");
	colors = generateRandomColors(3);
	numSquares = 3;
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++){
			if (colors[i]) {
				squares[i].style.backgroundColor = colors[i]
			} else {
				squares[i].style.display = "none";
			}
		}	

})

hard.addEventListener("click", function(){
	this.classList.add("selected");
	easy.classList.remove("selected");
	colors = generateRandomColors(6);
	numSquares = 6;
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

		for(var i = 0; i < squares.length; i++){
			if (colors[i]) {
				squares[i].style.backgroundColor = colors[i]
				squares[i].style.display = "block";
			}
		}
})

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	hard.classList.remove("reset");
	easy.classList.remove("reset");

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = " ";
	this.textContent = "New Colors";
})

//Randomizing colors and proving true or false on click
for (var i = 0; i < squares.length; i++) {
	// initial colors to squares
		squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
		squares[i].addEventListener("click", function(){

			var clickedColor = this.style.backgroundColor;

			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				win = !win;
				changeColors(clickedColor);

				h1.style.backgroundColor = clickedColor;
				//passing in clickedColor
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
				}
	});	
}


//Functions
function changeColors(color){
	//loop through all squares
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add rum random colors
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	//pick a red 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}