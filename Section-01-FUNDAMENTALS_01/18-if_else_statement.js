/** @format */

// if else statement is used for taking decisions and putting condtion
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait for another ${yearsLeft} years :)`);
}

/* its basically called control structure because javaScript does not give us much control
on the codes but by the help of if-else statement we have the complete control upon the code*/

const birthyear = 1998;
let century;

if (birthyear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
