//////////1
document.write( "<h1>" + "Chapter-5_1:" + "</h1>");
var num1 = 23;
var num2 = 56;
var sum = num1 + num2;

document.write( "Sum of " + num1 + " + " + num2 + " is " + sum );





//////////2
document.write( "<h1>" + "Chapter-5_2:" + "</h1>");

var sub = num2 - num1;
var mul = num1 * num2;
var div = num2 / num1;
var modulus = num2 % num1;

document.write( "<br>" + "Subtraction of " + num2 + " from " + num1 + " is " + sub );
document.write( "<br>" + "Multiplication of " + num1 + " and " + num2 + " is " + mul );
document.write( "<br>" + "Division of " + num2 + " by " + num1 + " is " + div );
document.write( "<br>" + "Remainder of " + num2 + " divide by " + num1 + " is " + modulus + "<br>");





//////////3
document.write( "<h1>" + "Chapter-5_3:" + "</h1>");

var num;
document.write( "<br>" + "Value after variable declaration is " + num);
num = 5;
document.write( "<br>" + "Initial value: " + num );
num++;
document.write( "<br>" + "Value after increment is: " + num );
num = num + 7;
document.write( "<br>" + "Value after addition is: " + num);
num--;
document.write( "<br>" + "Value after decrement is: " + num);
num = num % 3;
document.write( "<br>" + "Value of remainder after dividing by 3 is: " + num + "</br>");




//////////4
document.write( "<h1>" + "Chapter-5_4:" + "</h1>");

var oneTicketPrice = 600;
var fiveTicketPrice = oneTicketPrice * 5;

document.write("<br>" + "Total cost of buying 5 tickets to a movie is " + fiveTicketPrice + "PKR" + "</br>" );




//////////5
document.write( "<h1>" + "Chapter-5_5:" + "</h1>");

document.write( "<br>" + "Table of 4 ");
{
    for( var T4 = 1; T4 <= 10; T4++ )
    document.write( "<br>" + 4 + " * " + T4 + " = " + 4*T4);
}




//////////6
document.write( "<h1>" + "Chapter-5_6:" + "</h1>");

var C_T = 25;
var F_T = (C_T * 9/5) + 32;
document.write( "<p>"+ C_T + " degree Celsius equals to " + F_T + " degree Farenheit");

var F_T = 70;
var C_T = (F_T - 32) * 5/9;
document.write("<br>" + F_T + " degree Farenheit equals to " + C_T + " degree Celsius");




//////////7
document.write( "<h1>" + "Chapter-5_7:" + "</h1>");

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shipCharges = 100;

document.write( "<h1>" + "Shopping Cart" + "</h1>");
document.write( "<p>" + "Price of Item 1 is " + priceItem1 );
document.write( "<br>" + "Quantity of Item 1 is " + quantityItem1 );
document.write( "<br>" + "Price of Item 2 is " + priceItem2 );
document.write( "<br>" + "Quantity of Item 2 is " + quantityItem2 );
document.write( "<br>" + "Shipping Charges: " + shipCharges );

var totalCoat = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shipCharges;

document.write( "<p>" + "Total cost of your order is " + totalCoat );



//////////8
document.write( "<h1>" + "Chapter-5_8:" + "</h1>");

var totalMarks = 980;
var marksObt = 804;

var per = marksObt/totalMarks * 100;
document.write( "Percentage: " + per );




///////////9
document.write( "<h1>" + "Chapter-5_9:" + "</h1>");

document.write( "<h1>" + "Currency in PKR" + "</h1>");
var sumPKR = ( 10 * 104.80 ) + ( 25 * 28 );
document.write("Total Currency in PKR: " + sumPKR);



///////////////10
document.write( "<h1>" + "Chapter-5_10:" + "</h1>");

var iniNum = 10;
var calc = iniNum + 5 * 10 / 2;
document.write("The result is: " + calc);


///////////////11     some issues
document.write( "<h1>" + "Chapter-5_11:" + "</h1>");

document.write( "<h1>" + "Age Calculator" + "</h1>");

var currentYear = 2019;
var birthYear = 1999;
var age = currentYear - birthYear;

document.write( "Current year: " + currentYear);
document.write( "<br>" + "Birth year: " + birthYear);
document.write( "<br>" +  "Your Age: " + age);



/////////////////////12 
document.write( "<h1>" + "Chapter-5_12:" + "</h1>");
document.write( "<h1>" + "The Geometrizer" + "</h1>");

var rad = 20; //in cm 
var circum = 2 * 3.142 * rad;
var area = 3.142 * rad * rad;

document.write("The radius of circle is: " + rad + " cm");
document.write("<br>" + "The circumference is: " + circum + " cm" );
document.write("<br>" + "The area is: " + area + " cm^2" );




/////////////////////////13
document.write( "<h1>" + "Chapter-5_13:" + "</h1>");

document.write( "<h1>" + "The Lifetime Supply Calculator" + "</h1>");

var favSnack = "Choclate chips";
var curAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var totalEat = (maxAge - curAge) * 3 * 365;

document.write( "Favourite snack: " + favSnack);
document.write( "<br>" + "Current age: " + curAge);
document.write( "<br>" + "Estimated maximun age: " + maxAge);
document.write( "<br>" + "Amount of snacks per day: " + amountPerDay);
document.write( "<br>" + "You will need " + totalEat + ' ' + favSnack + " to last you until the ripe old age of " + maxAge);

