
var input = Number(prompt("Enter a number less than 1000"));
document.write(numToWords(input));


function numToWords(num) {

    var ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    var tens = ["", "", "twenty", "thirty", "forty","fifty", "sixty", "seventy", "eighty", "ninety"];

    if (num < 20) {
        return ones[num];
    }
    else if (num >= 20 && num < 100) {               //for two digits
       
        var index = numIndex(num);
       
        return tens[index[0]] + " " + ones[index[1]];
    }
    else if (num === 100) {

        return ones[numIndex(num)[0]] + " " + "hundred";
    }
    else if (num > 100 && num < 1000) {               //for three digits
        
        return ones[numIndex(num)[0]] + " " + "hundred" + " and " + tens[numIndex(num)[1]] + " " + ones[numIndex(num)[2]];
    }
    else {
        document.write("Not Found");
    }
}

function numIndex(iNum) {

    var separatingString = iNum.toString().split(""); //converted number to string then used split function to put the sub-strings in an array
    return separatingString;
}
