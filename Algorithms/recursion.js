let counter = 0;
function increment () {
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  return increment();
}
console.log(increment());

// identify the base case
// identify the recursive case
// get closer and closer and return when needed. Usually you have two returns