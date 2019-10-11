/////////////////////////////////////  assignment started //////////////////////////////////////

/////// ques1 ////////

var input = prompt("What is your city name?");
if (input == "Karachi") {
    alert("Welcome to city of lights!");
}


/////// ques2 //////////

var gender = prompt("What is your gender?");

if (gender === "Male") {
    alert("Good Morning Sir!");
}
else if (gender === "Female") {
     alert("Good Morning Ma'am");
}
  



/////// ques3 ////////

var colorInput = prompt("What is the color of traffic signal?");

if (colorInput === "Red") {
    alert("Must Stop");
}
else if (colorInput === "Yellow") {
     alert("Ready to move");
}
else if (colorInput === "Green") {
      alert("Ready to move now");
}




//////// ques4 ////////

var fuelInput = prompt("How much fuel is left? (In Litres)");

if (fuelInput < 0.25) {
    alert("Please refill your fuel in your car");
}


/////// ques5 ///////

//a
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

//b
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

//c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

//e
if (true) {
    alert("True");
}
if (false){
    alert("False");
}

//f
if ("car" < "cat") {
    alert("car is smaller than cat");
}



////// ques6 //////

var sub1 = Number(prompt("What are your marks in math "));
var sub2 = Number(prompt("What are your marks in english "));
var sub3 = Number(prompt("What are your marks in science "));
var totalMarks = Number(prompt("What are the total Marks"));
var marksObt = sub1 + sub2 + sub3;

var per = (marksObt / totalMarks) * 100;

if (per <= 100 && per >= 80) {
    document.write("<h1> Marks Sheet </h1>");
    document.write("<br>" + "Total Marks: " + totalMarks);
    document.write("<br>" + "Marks Obtained: " + marksObt);
    document.write("<br>" + "Percentage: " + per + "%");
    document.write("<br>" + "Grade : A-one");
    document.write("<br>" + "Remarks: Excellent");
}
else if (per < 80 && per >= 70) {
    document.write("<h1>" + "Marks Sheet" + "</h1>");
    document.write("<br>" + "Total Marks: " + totalMarks);
    document.write("<br>" + "Marks Obtained: " + marksObt);
    document.write("<br>" + "Percentage: " + per + "%");
    document.write("<br>" + "Grade : A");
    document.write("<br>" + "Remarks: Good");
}
else if (per < 70 && per >= 60) {
    document.write("<h1>" + "Marks Sheet" + "</h1>");
    document.write("<br>" + "Total Marks: " + totalMarks);
    document.write("<br>" + "Marks Obtained: " + marksObt);
    document.write("<br>" + "Percentage: " + per + "%");
    document.write("<br>" + "Grade : B");
    document.write("<br>" + "Remarks: You need to improve");
}
else if (per < 60) {
    document.write("<h1>" + "Marks Sheet" + "</h1>");
    document.write("<br>" + "Total Marks: " + totalMarks);
    document.write("<br>" + "Marks Obtained: " + marksObt);
    document.write("<br>" + "Percentage: " + per + "%");
    document.write("<br>" + "Grade: Fail");
    document.write("<br>" + "Remarks: Sorry");
}



///////// ques7 //////

var secretNum = 8;
var guessNum = Number(prompt("Guess a number ranging from 1 to 10"));

if (secretNum == guessNum) {
    alert("Bingo! Correct Answer");
}
else if (secretNum == guessNum + 1) {
    alert("Close enough to the correct answer");
}




//////// ques8 ////////

var numInput = Number(prompt("Give a number: "));
var numRem = numInput % 3;

if (numRem == 0) {
    alert( numInput + " is divisible by 3");
}





///// ques9 /////

var inputNum = Number(prompt("Type a number "));
if ((inputNum%2) == 0) {
    alert( inputNum + " is an even number");
}
else if ( !( (inputNum%2) == 0 ) ) {
    alert( inputNum + " is an odd number");
}


////// ques10 ///////

var temp = Number(prompt("What is the Temperature?"));

if (temp > 40) {
    alert("It is too hot outside.");
}
else if (temp > 30) {
    alert("The Weather today is Normal.");
}
else if (temp > 20) {
    alert("Today’s Weather is cool.");
}
else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}



/////// ques11 //////

var firstNum = Number(prompt("What is the first number? "));
var secNum = Number(prompt("What is the second number? "));
var operator = prompt("Give Operator sign ");

if (operator == "+") {
    alert( firstNum + " + " + secNum + " is equal to " + (firstNum + secNum) );
}
else if (operator == "-") {
    alert( secNum + " - " + firstNum + " is equal to " + (secNum - firstNum) );
}
else if (operator == "*") {
    alert( firstNum + " x " + secNum + " is equal to " + (firstNum * secNum) );
}
else if (operator == "/") {
    alert( firstNum + " / " + secNum + " is equal to " + (firstNum / secNum) );
}
else if (operator == "%") {
    alert( firstNum + " % " + secNum + " is equal to " + (firstNum % secNum) );
}


//////////////////////////////// assignment completed //////////////////////////////////////////////