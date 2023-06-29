/** @format */

// In javaScript we have 5 falsy vlaues : [ 0, ' ', undefined, null, NaN ]

// these are not initially falsy values but becames on the conversion time.
// Everything else is truthy values

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Jonas"));
console.log(Boolean(undefined));
console.log(Boolean(null));

//Ex-1
const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}
// the output will be else part because money having falsy value

//Ex-2
let height;
if (height) {
  console.log("YAY! Height id defined");
} else {
  console.log("Height is not defined");
}
// here hight is undefined thats why the condition does not satisfy.
