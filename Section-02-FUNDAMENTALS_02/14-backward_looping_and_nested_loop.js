/** @format */

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

// NESTED LOOP
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----Strig Excersice ${exercise}----`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weight ${rep}`);
  }
}
