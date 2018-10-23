# DataTypes

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

## 1.Number

```
let n = 123;
n = 12.345;'
```
The number type serves both for integer and floating point numbers.

There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction - and so on.

Besides regular numbers, there are so-called "symbolic values" which also belong to that type: +Infinity, -Infinity and NaN.

Infinity represents the mathematical Infinity ∞. It is a special value that's greater than any number.

We can get it as a result of division by zero:

```
console.log( 1 / 0 ); // Infinity
```

Or just mention it in the code directly:

```
console.log( Infinity ); // Infinity
```

NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:


```
console.log( "not a number" / 2 ); // NaN, such division is erroneous
```

NaN is sticky. Any further operation on NaN would give NaN:


```
console.log( "not a number" / 2 + 5 ); // NaN
```

So, if there's NaN somewhere in a mathematical expression, it propagates to the whole result.
Doing maths is safe in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

The script will never stop with a fatal error ("die"). At worst we'll get `NaN` as the result.
Symbolic numeric values formally belong to the "number" type. Of course they are not numbers in a common sense of this word.

## 2.String

A string in JavaScript must be quoted.

```
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed ${str}`;
```
In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.

Double and single quotes are "simple" quotes. There's no difference between them in JavaScript.

Backticks are "extended functionality" quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
```
let name = "John";
console.log( "Hello", name ); // Hello, John!
```

In some languages, there is a special "character" type for a single character. For example, in the C language and in Java it is `char`.

In JavaScript, there is no such type. There's only one type: `string`. A string may consist of only one character or many of them.

## 3.Boolean

The boolean type has only two values: true and false.

This type is commonly used to store yes/no values: true means "yes, correct", and false means "no, incorrect".

For instance:
```
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
```
Boolean values also come as a result of comparisons:
```
let isGreater = 4 > 1;

console.log( isGreater ); // true (the comparison result is "yes")
```

## 4.Null

The special null value does not belong to any type of those described above.

It forms a separate type of its own, which contains only the null value:
```
let age = null;
```
In JavaScript null is not a "reference to a non-existing object" or a "null pointer" like in some other languages.

It's just a special value which has the sense of "nothing", "empty" or "value unknown".

The code above states that the age is unknown or empty for some reason.

## 5.Undefined

The special value undefined stands apart. It makes a type of its own, just like null.

The meaning of undefined is "value is not assigned".

If a variable is declared, but not assigned, then its value is exactly undefined:
```
let x;

console.log(x); // shows "undefined"
```
Technically, it is possible to assign undefined to any variable:
```
let x = 123;

x = undefined;

console.log(x); // "undefined"
```
But it's not recommended to do that. Normally, we use null to write an "empty" or an "unknown" value into the variable, and undefined is only used for checks, to see if the variable is assigned or similar.

## 6.Symbol Type
```
let vowel = Symbol();
let letter = Symbol("Letter");

console.log(typeof(vowel));
console.log(typeof(letter));
console.log(vowel.toString());
console.log(letter.toString());
```
Symbols are new to JavaScript introduced in ES6.

The symbol type is used to create unique identifiers for objects. We have to mention it here for completeness, but it's better to study them after objects.The data type symbol is a primitive data type.

A symbol value may be used as an identifier for object properties; this is the data type's only purpose. 
```
// Create another symbol with the same description
let character = Symbol("Letter");

// Symbols are never the same, even if they use the same description 
if (letter == character) { 
   console.log('letter == character is True');
} else {
  console.log('letter == character is False');
}

if (letter === character) { 
   console.log('letter === character is True');
} else {
  console.log('letter === character is False');
}

// Use symbols as Object keys 
let config = {}
config[vowel] = "A";
config[letter] = "B";
config[character] = "C";

console.log(config);
 ```

# 7.Object

The object type is special.

All other types are called "primitive", because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

```
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
// get fields of the object:
alert( user.name ); // John
alert( user.age ); // 30
```
