var age = parseInt(prompt("Enter your age"));
var currentYear = parseInt(new Date().getFullYear());

var birthYear = currentYear - age;

document.write("Your age is " + age);
document.write("<br>" + "Your birth year is " + birthYear);

