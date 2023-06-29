/** @format */

// type-conversion
const birthyear = "1991";
console.log(birthyear + 18); // '1991' + 18

// to convert string to number we use Number() method
console.log(Number(birthyear)); // here the '1991' becames 1991
console.log(Number(birthyear) + 18); // 1991 + 18

console.log(Number("Jonas")); // NaN
// jonas is not valid for type conversion
// NaN: Not a Number
// if we will see then it's actually a number an invalid number

// similarly to convert number to the string we have String() method but it should be valid string for number.
console.log(String("1991"));

// TYPE COERSION
console.log("I am " + 23 + " your old");
console.log("I am " + "23" + " your old");
console.log("I am " + String(23) + " Year old");

// Everything does not support type coersion like
console.log("23" - "10" - 3); // 10
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5
// substraction, multiplication and devision are not supports type-coersion

// Ex-1
let n = "1" + 1;
n = n - 1;
console.log(n); // 10

// Ex-2
console.log(2 + 3 + 4 + "5"); // 95

// Ex-3
console.log("10" - "4" - "3" - 2 + "5"); // 15
