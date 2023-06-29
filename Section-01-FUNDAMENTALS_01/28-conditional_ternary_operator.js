/** @format */

const age = 23;
age >= 18
  ? console.log("I can drink wine🍷")
  : console.log("I can drink water");
// the avobe code is as same as the below code let's see

if (age >= 18) {
  console.log("I can drink wine");
} else {
  console.log("I can drink only water");
}

// in other way we can write this
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

// by ternary way we can actually insert the statement into the template variable
console.log(`I would like to drink ${age >= 18 ? "wine" : "water"}`);
