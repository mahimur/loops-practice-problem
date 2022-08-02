/* for (var i = 1; i <= 20; i++) {
    console.log(i);
    if (i > 10) {
        break;
    }
} */

/* var roastGiven = 0;
while (roastGiven < 10) {
    console.log('roast den, gift ansi');
    roastGiven++;
    if (roastGiven > 4) {
        break;
    }
} */

/* var items = ['pen', 'bottle', 'orange', 'mango', 'paper'];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'mango') {
        break;
    }
    console.log(item);
} */

var arr = [34, 52, 94, 84, 98, 24, 188, 76, 27, 99, 54];
for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    if (number > 100) {
        break;
    }
    console.log(number);
}