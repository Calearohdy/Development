// Arrays
	var sum = [1,2,5];
	var count = 0;

	function sumArray(sum){
		for (var i = 1; i < sum.length; i++) {
			count += sum[i];
		}
		return count;
	}
	console.log(sumArray(sum));
/*
var same = ["a","a","b"];

	function isUniform(same){
		for (var i = 1; i < same.length; i++) {
			if (same[i] !== same[0]) 
				return false;
		}
		return true;
	}
	console.log(isUniform(same));

var order = ["a","b","c"];
	function printReverse(order){
		var rev = new Array;
		for (var i = order.length - 1; i >= 0; i--) {
			rev.push(order[i]);
	}
	return rev;
}
	console.log(printReverse(order));

var todo = ["Buy laptop"];

var input = prompt("What would you like to do?")

while(input !== "quit"){

	if (input === "list") {
		console.log("*********");
		todo.forEach(function(todo, i){	
		console.log(i + ": " + todo);
	});
		console.log("*********");
	} else if (input === "new") {
		var newTodo = prompt("Enter new todo");
		todo.push(newTodo);
		console.log("Added.")
	} else if (input === "delete") {
		var index = prompt("Enter index of todo to delete");

		todo.splice(index,1);
		console.log("Deleted.")
	}

	input = prompt("What would you like to do?");
}
console.log("Session Ended");

//Functions

var strKebab = "----";
console.log(kebabToSnake(strKebab));

function kebabToSnake(strKebab){

	var strSnake = strKebab.replace(/-/g , "_");

		return strSnake;
}
		if (text === "-") {
			text.replace("-","_");
		}
		var strSnake = text;

var answer = prompt("Guess a number");

alert(factorial(answer));

function factorial (answer){
	if (answer === 0) {
		return 1;
	}

	return answer * factorial(answer - 1);
}

var number = (prompt("Guess a number"));
//alert(isEven(3));
console.log(isEven(number));

function isEven(){
	var answer = "";

	if (Number(number) % 2 === 0) {
	 	answer = "The number " + number + " is even";
	} else {
		answer = "The number " + number + " is odd";
	}
		return answer;
}


//for loops
//for (var i = -10; i <= 20; i++) {
//	console.log(i)
//}

//for (var i = 10; i <= 40; i+= 2) {
//	console.log(i)
//}


for (var i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i)
	}
}

for (var i = 5; i <= 50; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(i)
	}
}

//Using While loops

var annoy = prompt("Are we there yet?");

while(annoy.indexOf("yes") === -1){
	prompt("Are we there yet?");
}

		alert("About time");
		console.log("About Time");


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