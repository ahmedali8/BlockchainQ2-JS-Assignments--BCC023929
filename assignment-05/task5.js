var numInput = parseInt(prompt("Enter number (in hundreds)")); //taking input as number

if (numInput <= 0 || numInput.toString().length != 3) {
   
    alert("Try again");    
}
else {
    var hundredNote = numInput.toString().slice(0, 1);   //converting number to string for slicing the first digit which gives the no. of hundred notes
    var rem = numInput.toString().slice(1, 3);           //converting number to string for slicing other two digits
    var fiftyNote = Math.floor(parseInt(rem)/50);        //conerting sliced two digits into number dividing it by 50 (note) and used floor to findout the exact number of fifty notes
    var tenNote = (parseInt(rem)-50)/10;                 //conerting sliced two digits into number, subtract the 50 (note) and divided whole by 10 (note)
    
    document.write("You have " + hundredNote + " hundred notes " + fiftyNote + " fifty notes " + tenNote + " ten notes");
}