function guessGame() {
    do {
        var num = Math.floor((Math.random()*100) + 1); //creating random number
        //alert(num);
        var guess;
    
        guess = parseInt(prompt("Guess the number")); //first attempt
        if (guess != num) {
            alert("Incorrect, Please try again");
        }

        guess = parseInt(prompt("Guess the number")); //second attempt
        if (guess != num) {
            alert("Incorrect, Please try again");
        }

        guess = parseInt(prompt("Guess the number")); //third attempt
        if (guess != num) {
            alert("Incorrect, Please try again");
            alert("You Lose");
            repeatGame(guess);
        }
        
        else {
            alert("You are right, You won");
            repeatGame();
        }

        guess++;
    }while(guess != num);
}

function repeatGame() {
    var again = prompt("Do you want to play again? (Y/N)");
    if (again == "Y") {
        guessGame();
    }
    else if (again == "N") {
        alert("Thank you for playing with us today");
    }
    else {
        repeatGame();
    }
}


guessGame();