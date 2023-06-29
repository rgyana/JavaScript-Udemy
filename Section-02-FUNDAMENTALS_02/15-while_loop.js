/** @format */

let i = 0;
while (i <= 10) {
  console.log(`Lifting weight ${i}`);
  i++;
}

// Example -2
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
