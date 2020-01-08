function theGeometrizer() {
    var numInput = parseInt(prompt("Enter radius"));

    if (numInput < 0) {
        return document.write("Not a circle, Enter a valid radius");
    }
    else if (numInput === 0) {
        return document.write("Not a circle, Enter a valid radius");
    }
    else {

        function calcCircumference(rad) {  //rad is parameter
            var cC = 2 * 3.142 * rad;
            if (cC > 0) {
                return document.write("<br>" + "The circumference is " + cC);
            }
        }
        calcCircumference(numInput);  //caling circumference function
        
        function calcArea(rad) {      //rad is parameter
            var area = 2 * 3.142 * rad * rad;
            if (area > 0) {
                return document.write("<br>" + "The area is " + area);
            }
        }
        calcArea(numInput);           //calling area function
    }
}

theGeometrizer(); // calling function