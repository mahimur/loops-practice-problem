// 75.25, 65, 80, 35.45, 99.50
// mathematics, biology, chemistry, physics, and bangla
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var phyMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + phyMarks + banglaMarks;
console.log(totalMarks);

var average = totalMarks / 5;
var averageTwoDecimal = parseFloat(average.toFixed(2));
console.log(averageTwoDecimal);

// concatinate 2 lines.....
var firstName = 'I am going to be';
var lastName = 'an awesome developer';
var fullName = firstName + ' ' + lastName;
console.log(fullName);