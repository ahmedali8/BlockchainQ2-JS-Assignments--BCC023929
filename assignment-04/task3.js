
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

