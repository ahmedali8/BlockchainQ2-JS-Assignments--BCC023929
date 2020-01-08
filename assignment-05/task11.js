function isVowel(char) {
    if (char.length != 1) {
        isVowel( prompt("\"Not Accepted\"\nEnter a single character").toLowerCase() );    }
    
    else {
        var isFound = false;

        switch(char){
            case "a" :
                isFound = true;
                alert(char + " is a vowel: " + isFound);
                break;
            case "e" :
                isFound = true;
                alert(char + " is a vowel: " + isFound);
                break;
            case "i" :
                isFound = true;
                alert(char + " is a vowel: " + isFound);
                break;
            case "o" :
                isFound = true;
                alert(char + " is a vowel: " + isFound);
                break;
            case "u" :
                isFound = true;
                alert(char + " is a vowel: " + isFound);
                break;
            default :
                alert(char + " is a vowel: " + isFound);
            
        }
    }
}

isVowel( prompt("Enter a single character").toLowerCase() ); //calling function with user input as argument