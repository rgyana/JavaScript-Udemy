/** @format */

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// creating an object
const jonasObject = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonasObject);

// get the value of the property
console.log(jonasObject.firstName);
console.log(jonasObject.age);

console.log(jonasObject["job"]); // this way also we can the data of the property

// Ex- 1
const nameKey = "Name";
console.log(jonasObject["first" + nameKey]);
console.log(jonasObject["last" + nameKey]);

// Ex-2
const interestedIn = prompt(
  "What do you want to know about Jonas ? Choose between firstName, lastName, age, job and friends."
);
// console.log(jonasObject[interestedIn]);
if (jonasObject[interestedIn]) {
  console.log(jonasObject[interestedIn]);
} else {
  console.log("Not available");
}

// we can add element into the object also like this
jonasObject.location = "India";
jonasObject["twitter"] = "@jonasschmedtmann";
console.log(jonasObject);

// CHALLENGE
console.log(
  `${jonasObject.firstName} has ${jonasObject.friends.length}, and his best friend is called ${jonasObject.friends[0]}`
);
