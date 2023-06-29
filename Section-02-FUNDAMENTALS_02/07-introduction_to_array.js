/** @format */

// Array is like a big container into which we can store variables and then later reference them

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
// instead of writing 3 variables we can store the values in a single go

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// in other way also we can declare array in javaScript
const someYears = new Array(1990, 1984, 2008, 2020);

// printing every single element of the array
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

// .length() method : to get actuall length of the array
console.log(friends.length); // 3
console.log(friends.length - 1); // 2

// we can change/ update/ mutate the element of the array
friends[0] = "Jay";
console.log(friends); // Michael will replaced by jay

// friends = ["Bob", "Hari"]; // this is elligle cuz we already assign the friends array

// we can take variable inside the array and also we can take one array inside another array
const firstName = "Jonas";
const jonas = [firstName, "Schmedthmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Excercise
const calcAge = function (birthyear) {
  return 2037 - birthyear;
};

const years = [1991, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
