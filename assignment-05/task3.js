//done without function
var str = prompt("Enter any string");
var chars = str.toLowerCase().split("");
var charsRev = str.toLowerCase().split("").reverse().join();

if (chars[0] == charsRev[0]) {
   document.write( str + " is a palindrome");
}
else {
  document.write( str + " is not a palindrome");
}





//done with function 
function palindromeCheck(str) {
  var strRev = str.toLowerCase().split("").reverse("").join(""); //split makes array //reverse fn reverses the array //join transforms array to string
      
  if (str.toLowerCase() === strRev.toLowerCase()) {
      document.write( str + " is a palindrome");
  }
  else {
    document.write( str + " is not a palindrome");
  }
}

palindromeCheck(prompt("Enter any string"));