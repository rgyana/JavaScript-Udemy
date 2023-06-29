/** @format */

const firstName = "Jonas";
const job = "Teacher";
const birthyear = 1991;
const year = 2037;
const jonas =
  "I'm " + firstName + ", a " + (year - birthyear) + " years old " + job + "!";
console.log(jonas);

// in the above way we can do the string concatenation but it is a very pain full process
// to get rid of this problem we have another thing is called template literals
// it is denoted by back tik symbol

const firstName1 = "Jonas";
const job1 = "Teacher";
const birthyear1 = 1991;
const year1 = 2037;
const jonasNew = `I'm ${firstName1}, a ${
  year1 - birthyear1
} years old ${job1}!`;
console.log(jonasNew);

// we can also use back tik for normal string also
// template literal is used to create multiple string

console.log("String with \n\
multiple \n\
lines");
// in normal string we have to use \n\ for print the next line

console.log(`String with 
multiple
lines`);
