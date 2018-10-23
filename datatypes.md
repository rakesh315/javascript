DataTypes

In programming Datatypes is an important topic.To operate Variables, we need to know about types.
Without Datatypes a machine cannot solve this safely.

There are 7 basic datatypes in Javascript.
1.Number
2.String
3.Boolean
4.Null
5.Undefined
6.Symbol
7.Object

1.Number

The number type serves both for integer and floating point numbers.

There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction - and so on.

Besides regular numbers, there are so-called "special numeric values" which also belong to that type: Infinity, -Infinity and NaN.

Infinity represents the mathematical Infinity ∞. It is a special value that's greater than any number.

We can get it as a result of division by zero:

alert( 1 / 0 ); // Infinity
Or just mention it in the code directly:

alert( Infinity ); // Infinity
NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

alert( "not a number" / 2 ); // NaN, such division is erroneous
NaN is sticky. Any further operation on NaN would give NaN:

alert( "not a number" / 2 + 5 ); // NaN
So, if there's NaN somewhere in a mathematical expression, it propagates to the whole result.

Doing maths is safe in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

The script will never stop with a fatal error ("die"). At worst we'll get `NaN` as the result.
Special numeric values formally belong to the "number" type. Of course they are not numbers in a common sense of this word.

We'll see more about working with numbers in the chapter info:number
