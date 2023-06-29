/** @format */

// functiion declaration
function calculateAge1(birthyear) {
  return 2037 - birthyear;
}
console.log("In the function declaration the age is: " + calculateAge1(1991));

// function expression
// Anonymous function
const calculateAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const age2 = calculateAge2(1991);
console.log(age2);
