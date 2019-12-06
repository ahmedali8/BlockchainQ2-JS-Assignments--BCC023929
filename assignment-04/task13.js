var d = new Date();
var mSec = d.getTime();
var min = mSec / (1000*60);

document.write("Current Time: " + d);
document.write("<br>" + "Elapsed miliseconds since Jan 1, 1970: " + mSec);
document.write("<br>" + "Elapsed minutes since Jan 1, 1970: " + min);