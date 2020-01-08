function vowelCount(str) {
    vowels = ["a", "e", "i", "o", "u"];
    strArray = str.split("");          //split fn saves each character in an array
    var count = 0;
    
    for (var i = 0; i < strArray.length; i++) {
        for (var j = 0; j < vowels.length; j++) {

            if (strArray[i] == vowels[j]) {
                count++;
            }
        }
    }
    return count;
}

document.write(vowelCount( prompt("Enter string").toLowerCase() ));
//                         ^--------------------^ ^-----------^    taking input and converting it to lowercase
//             ^------------------------------------------------^  calling the function with user input as argument and printing the whole return value
