var arr = [0, 5, 6, 7];

for (var i = arr.length-1; i >= 0; i--) {
    arr.push(arr[i]);
}

document.write(arr);