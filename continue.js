// continue is similar to 'skip' or 'go to next'

var arr = [34, 52, 94, 84, 98, 24, 188, 76, 27, 99, 54];
for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}