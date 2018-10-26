var sum = 0;
for (var i = 1; i <= 10000; i++) {
   sum += i;
   if (i === 50) {
       break;    // immediately transfers control outside the for block
   }
}
alert("Sum = " + sum);       // => Sum = 1275