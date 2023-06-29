/** @format */

const friends = ["Michael", "Steven", "Peter"];

// push() - adding element in array
friends.push("Jay");
console.log(friends);

const newLength = friends.push("Ladloo");
console.log(newLength);

// unshift() - add the element to the beginning
friends.unshift("Nitin");
console.log(friends);

// pop() - to remove element from array
friends.pop(); // last element
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

// shift() - remove element from first
friends.shift();
console.log(friends);

// indexof() - to print the index of the element
console.log(friends.indexOf("Michael"));
console.log(friends.indexOf("Peter"));

// include() - checks the availibility of element (it returns boolean value)
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

// to check equality (strict)
friends.push(23);
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
  console.log("You have one friend called Peter");
} else {
  console.log("You do not have any friend called Peter");
}
