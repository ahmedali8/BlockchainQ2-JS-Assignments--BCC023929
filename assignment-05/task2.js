function areaOfRect(w, h) {                   //w = width  h = height
    var area = w * h;
    if (area === 0) {
        document.write("Not a rectangle");
    }
    else {
        return area;
    }
}

//Arguments as value
document.write("<h1>" + "Arguments as value" + "</h1>");
document.write("The area of rectangle is " + areaOfRect(8, 7) + " sq. unit");

//Arguments as variable
document.write("<h1>" + "Arguments as variable" + "</h1>");
var width = prompt("Enter value of width");
var height = prompt("Enter value of height");
document.write("The area of rectangle is " + areaOfRect(width, height) + " sq. unit");