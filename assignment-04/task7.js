//first method
var txt = "The quick brown fox jumps over the lazy dog";
var count = 0;

for (var i=0; i<txt.length; i++) {

    if (txt.toLowerCase().charAt(i) == "the") {
        
        count++;
    }
}

document.write("There are " + count + " occurrence(s) of word 'the'");



//Second method using built-in function <match>

var txt = "The quick brown fox jumps over the lazy dog";
var count = txt.toLowerCase().match(/the/g).length;                              //.length is written because match gives an array and we need to know the no of repitition so we use .length to know the elements in the array        
document.write("<br>" + "There are " + count + " occurrence(s) of word 'the'");
