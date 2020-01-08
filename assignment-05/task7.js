function isWeekend() {
    var input = prompt("Enter date\nFormat: Oct 23, 2019");
    var d = new Date(input);
    var day = d.getDay();   //gets the day in the form of number
    if (day == 0 || day == 6) {
        //sunday    //saturday 
        document.write("It's weekend");
    }
    else {
        document.write("Sorry! Wait for " + (6 - Number(day)) + " more days");
    }
}

isWeekend();