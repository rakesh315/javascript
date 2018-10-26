var numbers = [40, 14, 19, 1, 2];
var over18 = numbers.filter(myFunction);

console.log(over18);

function myFunction(value, index, array) {
    return value > 18;
}