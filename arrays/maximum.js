var points = [40, 15, 10, 50, 450, 1];
console.log(myArrayMax(points));

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}