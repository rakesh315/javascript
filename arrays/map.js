
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

console.log(numbers2);

function myFunction(value, index, array) {
    return value * 22;
}