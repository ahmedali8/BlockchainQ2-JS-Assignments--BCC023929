//regular expression method
var input = prompt("Enter email address");
var regex = /^([a-z0-9\.-]+)@([a-z0-9 -]+).([a-z]{2, 8})(.[a-z]{2, 8})?$/; //? makes the last bracket optional
//            ^------------^ ^-----------^ ^-----------^^------------^

if (regex) {
    alert("Valid Email Address");
}
else {
    alert("InValid");
}