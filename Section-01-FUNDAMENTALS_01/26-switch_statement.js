/** @format */

const day = "saturday";

switch (day) {
  case "monday":
    console.log("plan course structure and go to coding meeting");
    break;

  case "tuesday":
    console.log("prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("writing code example");
    break;

  case "friday":
    console.log("recording videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;

  case "default":
    console, log("invalid input");
}
// after every case statement we need to write break; otherwise it will print the next cases.

// for better understanding we can write the above code in if-else statement

if (day === "monday") {
  console.log("plan course structure and go to coding meeting");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("writing code example");
} else if (day === "friday") {
  console.log("recording videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("invalid Input");
}
