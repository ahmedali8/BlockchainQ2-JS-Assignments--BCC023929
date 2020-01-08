function ageCalc(year){
    var d = new Date(year); //input date object

    var today = new Date();  //current date object

    document.write("You are " + (today.getFullYear() - d.getFullYear()) + " years, " + (today.getMonth() - d.getMonth()) + " month and " + (today.getDate() - d.getDate()) + " days old.");
}    

ageCalc(prompt("Enter date object\nFormat: Dec 08, 2019"));