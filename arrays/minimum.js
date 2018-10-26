var points = [40, 15, 10, 50, 450, 1];
console.log(myArrayMin(points));

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}