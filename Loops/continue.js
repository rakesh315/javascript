var i;
for (var i = 1; i <= 10; i++)
{
   if ((i % 2) != 0) {
      continue;
   }
   alert(i);           // => 2, 4, 6, 8, 10
}