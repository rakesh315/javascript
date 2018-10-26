var numbers = [45, 4, 9, 16, 25];
var allOver20 = numbers.some(myFunction);

console.log("Some over 18 is " + allOver20);

function myFunction(value, index, array) {
    return value > 20;
}