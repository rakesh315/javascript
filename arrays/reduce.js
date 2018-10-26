var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);
console.log("The sum is " + sum);

function myFunction(total, value, index, array) {
    return total + value;
}