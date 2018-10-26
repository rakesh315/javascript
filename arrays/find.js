var numbers = [40, 14, 19, 1, 2];
var first = numbers.find(myFunction);

console.log("First number over 18 is " + first);

function myFunction(value, index, array) {
    return value > 18;
}