var d = new Date();
var week = parseInt(prompt("Enter week"));
var hrs = week*(7*24);
d.setHours(hrs);
document.write(d);