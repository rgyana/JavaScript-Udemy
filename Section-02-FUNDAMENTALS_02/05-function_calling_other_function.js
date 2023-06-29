/** @format */

function cutFruitPieces(fruit) {
  return fruit * 10;
}

function fruitProcessor(apple, orange) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(orange);

  const juice = `Juice with ${applePieces} picese of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(6, 8));
// this is the most important concepts in our
