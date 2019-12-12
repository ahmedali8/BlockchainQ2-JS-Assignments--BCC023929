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



////// ques 5 ////// 

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var uniqueArray = [];  //empty array bnaya he ta k tamam unique values ko isme store krwadein

for (var i = 0; i < arr1.length; i++) {
    if (uniqueArray.indexOf( arr1[i] ) === -1) {     //agr arr1 ka koi element pehly se mojud hoga to uska index number dedega otherwise -1 dega jis se pta lgjayga k wo mojud nhi he then hum usy push k through add krwadeingy
        uniqueArray.push(arr1[i]);
    }
}
document.write(uniqueArray);




//////// ques 6 //////

var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];

for (var i = 0; i < 3; i++) {
    document.write("<br>" + (i+1) + o[i+1] + " choice is " + aCities[i] + "</br>");

}




//////// ques 7 //////// 

//method 1
var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var newArray = [...new Set([...b, ...a])];
document.write(newArray);



//method 2
var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var c = [].concat(b, a);
var newArr = [];

for (var i = 0; i < c.length; i++) {
    if (newArr.indexOf( c[i] ) === -1) {
        newArr.push( c[i] );
    }
}
document.write(newArr);




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





////// ques 9 ///// 

var a = [24, 53, 78, 91, 12];
var largest = 0;
for (var i = 0; i < a.length; i++) {
    if (a[i] > largest) {
        largest = a[i];
    }
}
document.write(largest);




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


//////////////////////////////////////////// assignment completed ///////////////////////////////////////