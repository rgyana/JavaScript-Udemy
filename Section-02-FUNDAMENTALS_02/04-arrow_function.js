/**
 * /*
 * The ARROW FUNCTION is simply a special form of function expression that is shorter and therefore faster to write.
 *
 * @format
 */

const calculateAge1 = (birthyear) => 2037 - birthyear;
console.log(calculateAge1(1991));

// Example-1
const yearUntilRetirement = (birthyear) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearUntilRetirement(1991));

// Example-2
const yearUntilRetirement2 = (birthyear, firstName) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearUntilRetirement2(1991, "Jonas"));
console.log(yearUntilRetirement2(2000, "Ladloo"));
