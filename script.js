//Using While loops

var annoy = prompt("Are we there yet?");

while(annoy !== "yes"){
	prompt("Are we there yet?");
	if (annoy === "yes") {
		alert("About time");
		console.log("About Time");
	}
}

/*
var loops = -10;

while (loops < 20){
	console.log(loops)
	loops++
}
 || annoy !== "Yes" || annoy !== "yeah" annoy !== "Yeah"
  || annoy === "Yes" || annoy === "yeah" annoy === "Yeah"
var loops = 10;
while(loops < 40) {
	console.log(loops)
	loops++
	loops++
}

var loops = 300;
while(loops < 334){
	--loops;
	loops++;
	loops++;
	console.log(loops)
	loops++;
}

var loops = 5;
while(loops < 51){
	if (loops % 5 === 0 && loops % 3 ===0) {
		console.log(loops);
	}
	loops++
}


//Guessing number game
var guessedNumber = Number(prompt("Guess a number up to 10"));
alert(randomGen(guessedNumber));

function randomGen(guessedNumber) {
	var answer = "";
	var randomNum = Math.floor((Math.random() * 10) + 1);

	while (guessedNumber !== randomNum) {
		answer = "No sorry, the answer was " + randomNum + " try again.";
//		Number(prompt("Guess a number up to 10"));
	}


	if (guessedNumber === randomNum) {
		answer = "Wow you guessed correctly! it was " + randomNum;
	}

	return answer;	
}



var age = prompt("How old are you?");

alert(concertB(age));s



function concertB(age) {

var answer = "";

if (age < 18) {
answer = "You are too young to enter";
} else if (age < 21) {
answer = "You can enter, but no drinking allowed";
} else
answer = "You can enter and drink!";

 return answer;
}
*/