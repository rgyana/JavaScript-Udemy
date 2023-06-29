/** @format */

/*
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement �

GOOD LUCK �
*/

const massOfMark = 75;
const heightOfMark = 1.69;
const massOfJohn = 92;
const heightOfJohn = 1.72;

const BMIOfMark = massOfMark / (heightOfMark * heightOfMark);
const BMIOfJohn = massOfJohn / (heightOfJohn * heightOfJohn);

if (BMIOfMark > BMIOfJohn) {
  //   console.log("Mark's BMI is higher than Jhon");
  console.log(`Mark's BMI ${BMIOfMark} is more than John.`);
} else {
  //   console.log("John's BMI is higher than Mark");
  console.log(`John's BMI ( ${BMIOfJohn} ) is more than Mark.`);
}
