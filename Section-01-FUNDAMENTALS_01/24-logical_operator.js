/** @format */

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // AND operator
console.log(hasDriversLicense || hasGoodVision); // OR operator
console.log(!hasDriversLicense); // NOT operator

// Ex-1
if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// Ex-2
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

// Ex-3
// if isTired is TRUE
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is elegible to drive!");
} else {
  console.log("Someone else should drive...");
}
