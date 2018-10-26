var txt = "";
var numbers = [40, 14, 19, 1, 2];
numbers.forEach(myFunction);
console.log(txt);

function myFunction(value, index, array) {
    txt = txt + value + "<br>"; 
}
