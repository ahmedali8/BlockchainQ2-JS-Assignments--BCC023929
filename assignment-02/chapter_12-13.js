////// ques1 ////////

var input = prompt("Write any character ");
var checker = input.charCodeAt(0);

if (checker >= 48 && checker <= 57) {
    alert(input + " is a numeric value");
}
else if (checker >= 65 && checker <= 91) {
    alert(input + " is a Capital Letter");
}
else if (checker >= 97 && checker <= 122) {
    alert(input + " is a Small Letter");
}

////// ques2 ////////

var num1 = parseInt(prompt("Enter first integer value "));
var num2 = parseInt(prompt("Enter second integer value "));

if (num1 > num2) {
    alert(num1 + " is greater than " + num2);
}
else if (num2 > num1) {
    alert(num2 + " is greater than " + num1);
}




/////// ques3 //////

var numInput = Number(prompt("Type a number "));

if (numInput >= 1) {
    alert(numInput + " is a positive number");
}
else if (numInput < 0) {
    alert(numInput + " is a negative number");
}
else if (numInput == 0) {
    alert(numInput + " is equal to zero");
}



////// ques4 //////

var vowel = prompt("Type a letter to check whether it is a vowl or not");
var vowelASCII = vowel.charCodeAt(0);

if (vowelASCII == 65 || vowelASCII == 69 || vowelASCII == 73 || vowelASCII == 79 || vowelASCII == 85 || vowelASCII == 97 || vowelASCII == 101 || vowelASCII == 105 || vowelASCII == 111 || vowelASCII == 117 ) {
    alert( "True! " + '"' + vowel + '"' + " is a vowel ");
}
else {
    alert( "False! " + '"' + vowel + '"' + " is not a vowel ");
}



///// ques5 //////


var correctPassword = "ABC";
var password = prompt("Enter password");

if (password == "") {
    alert("Please enter your Password");
}
else if (password === correctPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}




/////// ques6 /////

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
greeting = "Good evening";
}



///////// ques7 ////////

var time = 1900;
if (time >= 0000 && time < 1200) {
    alert("Good Morning!");
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
}
else if (time >= 2100 && time < 2359) {
    alert("Good night!");
}



//////////////////////////// assignment 2 completed //////////////////////////////////////////////