////////////////////// assignment started ///////////////////////////


//////// ques1 ///////

var qualifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>" + "Qualifications" + "</h1>");

for (var i = 0; i < qualifications.length; i++) {
    document.write( "<br>" + (i+1) + ") " + qualifications[i] + "</br>" );
}



///// ques2 /////

var students = [];
var scores = [];

for(var i = 0; i < 3; i++) {
    students[i] = prompt("Name of student?");
    scores[i] = prompt("Score of student?");
}

for(var i = 0; i < students.length; i++) {
    document.write("<br>" + "Score of  " + students[i] + " is " + scores[i] + ". Percentage: " + (scores[i]/5) + "%" + "</br>" );
    
}



///////// ques3 //////

var colors = ["red", "green", "blue"];

// A
colors.unshift(prompt("Add color to the beginning:")); //adds to start
document.write("<br>" + colors + "</br>");

// B
colors.push(prompt("Add color to the end")); //adds to last
document.write("<br>" + colors + "</br>");

// C
colors.unshift("cyan", "magenta"); //adds to start
document.write("<br>" + colors + "</br>");

// D
colors.shift(); //removes first element
document.write("<br>" + colors + "</br>");

// E
colors.pop(); //removes last element
document.write("<br>" + colors + "</br>");

// F
var colorInput = prompt("What color do you want to add ?");
var index = prompt("At which index number do you want to add the color ?");

colors.splice(index, 0, colorInput); //adding element anywhere in between and optionally removing no. of elements coming after it
document.write("<br>" + colors + "</br>");

// G
var ind = prompt("At which index number do you wsnt to delete color(s) ?");
var noOfElements = prompt("How many colors do you want to delete ?");

colors.splice(ind, noOfElements);
document.write("<br>" + colors + "</br>");




///////// ques4 //////

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);

document.write("<br>" + "Cities list:" + "</br>");
document.write(cities + "<br>");

document.write("<br>" + "Selected cities list:" + "</br>");
document.write(selectedCities);



////// ques 5 ////// samajhna he ye sawal 

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];





//////// ques 6 //////

var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];

for (var i = 0; i < 3; i++) {
    document.write("<br>" + (i+1) + "st choice is " + aCities[i] + "</br>");

}




//////// ques 7 //////// nhi ho rha ye sawal

var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];




///// ques 8 /////

// a)counting
for (var i =1; i <= 15; i++) {
    document.write(i);

    if(i < 15) {
        document.write(", ");
    }
}

document.write("<br>" + "</br>");

// b)Reverse counting
for (var i = 10; i >= 1; i--) {
    document.write(i);

    if(i > 1) {
        document.write(", ");
    }

}

document.write("<br>" + "</br>");

// c)Even
for (var i = 0; i <= 20; i+=2) {
    document.write(i);

    if(i < 20) {
        document.write(", ");
    }

}

document.write("<br>" + "</br>");

// d)Odd
for (var i = 1; i <= 19; i+=2) {
    document.write(i);

    if(i < 19) {
        document.write(", ");
    }

}

document.write("<br>" + "</br>");

// e)Series
for (var i = 0; i <= 20; i+=2) {
    document.write(i);

    if(i <= 20) {
        document.write("k");
    }

    if(i < 20) {
        document.write(", ");
    }

}





////// ques 9 /////  is sawal ko mene ascending order me covert kr k last element ko output me dikha dia he. Kindly ye sawal mujhy dusry method se bhi samjhadijiayga
var a = [24, 53, 78, 91, 12];
var A = [24, 53, 78, 91, 12];
//        i, j
var B = [];

/* ascending order me sorting */
for (var i = 0; i < A.length; i++) {
    for (var j = i+1; j <= A.length; j++) {
        if (A[i] > A[j]) {

            B[i] = A[i];
            A[i] = A[j];
            A[j] = B[i];
        }
    }
}

var largestNum = A.slice(4, 5);

document.write("<br>" + "Array items: " + a + "</br>");
document.write("<br>" + "The largest number is " + largestNum + "</br>");






/////// ques 10 ////////

var A = [20,53,78,4,91,12];
//       i ,j
var B = [];

/* now sorting the elements of array A */

for (var i = 0; i < A.length; i++) {
    for (var j = i+1; j <= A.length; j++) {
        if (A[i] > A[j]) {
            
            B[i] = A[i];
            A[i] = A[j];
            A[j] = B[i];
        }
    }
}

document.write("<br>" + "Ascending order is: " + A + "</br>"); // smallest to largest number 


////////////////////////////////////////////// assignment completed ///////////////////////////////////////