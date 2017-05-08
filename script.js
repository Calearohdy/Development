//var firstName = prompt("What is your first name?");
//var lastName = prompt(firstName + ", what is your last name?");

var age = prompt("How old are you?");
alert(concertB(age));

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