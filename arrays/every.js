var numbers = [40, 14, 19, 1, 2];
var allOver18 = numbers.every(myFunction);
console.log("All over 18 is " + allOver18);
function myFunction(value, index, array) {
    return value > 18;
}