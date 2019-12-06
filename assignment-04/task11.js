var numInput = prompt("Enter a number");    //this will be in string
var digits = numInput.split("");            //put each sub-string into an array through split function
var sum = 0;

for (var i = 0; i < numInput.length; i++) {

    sum = sum + parseInt(digits[i]);
}
//at the end it will give the total value of sum                                    
var mean = sum / parseInt(digits.length);

document.write("Mean of individual digits is " + mean);