/** @format */

function logger() {
  console.log("My name is Gyana");
}
logger(); // fucntion calling / running / invoking
logger();
logger();
// how many times we will call the function then it will print the content having inside the function.

//Ex- 1
function fruitProcessor(apple, orange) {
  console.log(apple, orange);
}
fruitProcessor(10, 22);

// Ex- 2
function fruitJuice(mango, banana) {
  const juice = `juice with ${mango} mangos and ${banana} bananas!`;
  return juice;
}
console.log(fruitJuice(23, 77));

// in coding we have one universal rule that is known as DRY
// DRY : do not repeate yourself
// we have to avoid writing same code again and again
