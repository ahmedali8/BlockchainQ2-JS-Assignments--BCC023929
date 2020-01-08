//method 1
var pw = prompt("Enter password: \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must be atleast 8 characters long");

//using built-in function <isNaN> which is checking that its a number or not and passes boolean

if (isNaN(pw.slice(0, 1)) && pw.length === 8) {

    alert("Password Accepted");
}
else {
    var pw1 = prompt("Password does not meet the above requirements, \nEnter a valid password");
    pwChecker (pw1);    //password checker function call and passed the argument pw1 that was taken from the else prompt
}

//made a function to check the password if the above "else" fails. Can be used infinite times anywhere
function pwChecker (pass) {                                  
    if (isNaN(pass.slice(0, 1)) && pass.length === 8) {

        alert("Password Accepted");
    }
    else {
        alert("Try again");
    }   
}





//method 2
var pw = prompt("Enter password: \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must be atleast 8 characters long");
var conditions = ["a. It should contain alphabets and numbers", "b. It should not start with a number", "c. It must be atleast 8 characters long"];
var criteria = [false, false, false];

for (var i = 0; i < pw.length; i++) {
    if ( (pw.charCodeAt(i) >= 65 && pw.charCodeAt(i) <=91) || (pw.charCodeAt(i) >= 97 && pw.charCodeAt(i) <= 122) ) {
        criteria[0] = true;
    }
    else if (pw.charCodeAt(i) >= 48 && pw.charCodeAt(i) <=57) {
        criteria[0] = true;
    }
}

if (!(pw.charCodeAt(0) <= 48 && pw.charCodeAt(0) <= 57)) {
    criteria[1] = true;
}

else if (pw.length === 8) {
    criteria[2] = true;
}
document.write("<h1> Conditions: </h1>");
for (var i = 0; i < conditions.length; i++) {
    if(criteria[i]){
        document.write(conditions[i] + ": " + criteria[i] + "<br>");
    }
    else {
        document.write(conditions[i] + ": " +  criteria[i] + "<br>");
    }
}



//method 3 (regular expression method)
function passChecker() {
    var pw = prompt("Enter password: \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must be atleast 8 characters long");
    var firstChar = pw.slice(0, 1);
    var regexNum = /^([0-9])$/;
    var regex = /^([a-zA-Z0-9])$/;
    if (regex && (firstChar != regexNum) && (pw.length == 8)) {
        alert("Password Accepted");
    }
    else {
        alert("Enter a valid Password");
        passChecker();
    }
}    

passChecker();