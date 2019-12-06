var d = new Date();
var currentHours = d.getHours();   //extracting hours
var d1 = new Date();
var resetHours = d1.setHours(currentHours - 1);  //setting new hours in the new date object "d1"

document.write("Current Date: " + d);
document.write("<br>" + "1 hour ago, it was " + d1);