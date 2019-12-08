function factorial(num) {
    var ans = 1;
    for (var i = 2; i <= num; i++) {
        ans = ans * i;
    }
    return ans;
}

document.write(factorial(4));