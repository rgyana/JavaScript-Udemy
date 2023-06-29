/** @format */

// for loop keeps running while condition is TRUE
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting wights ${i}`);
}

// Looping Arrays, Breaking and contiuing
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
}

// Example-2
const jonasArray2 = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonasArray2.length; i++) {
  //filling types of Array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray2[i]);
}

console.log(types);

// Example 3
const years = [1991, 1967, 2007, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// COTNINUE : It is to exit the current iteration of the loop and continue to the next one.
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "string ") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

// BREAK : It is used to completely terminate the whole loop
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
