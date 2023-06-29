/** @format */

"use strict";
// by using this we are able to see that what kind of error or bug is our program, without that its very hard to find the error.

let hasDriversLicense = false;
const passTime = true;

// if (passTime) hasDriverLicense = true;
// here we accidenatlly write the hasDriverLicense instead of hasDriversLicense
// so by the help of 'use strict' we can see the error in our console

if (!hasDriversLicense) console.log("I am driver :) "); // it will work perfectly

// we can not use keyword as the name of any variable, fucntion, etc...
// const interface = "Audio";
// const private = 547;
// const if = 23;
