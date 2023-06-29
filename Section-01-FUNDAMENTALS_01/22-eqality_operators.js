/** @format */

// in java script we have 2 equality operator == and ===

// === is known as STRICT equality operator
// === does not supports type coersion
const age = 18;
if (age === 18) console.log("you are an adult now (STRICT)");

// == is known as loose equality operator
// == supports type coersion"
const myAge = "18";
if (myAge == 18) console.log("I am adult now (LOOSE)");

//Ex-1
const favourite = Number(prompt("write the favourite number: "));
console.log(favourite);
console.log(typeof favourite); // string
// in defauld prompt function is a type of string

if (favourite == 5) {
  // '5' == 5
  console.log("Cool! 5 is an awesome number");
}

if (favourite === 5) {
  // 5 === 5
  console.log("cool! 5 is an super number");
}
// to run above code we need to do type-conversion
// const favourite = Number(prompt("write the favourite number: "))5
else if (favourite === 7) {
  console.log("7 is also a very cool number");
} else {
  console.log("Invalid Number");
}

// also we have not operator
if (favourite !== 8) {
  console.log("why not 8 ?");
}
