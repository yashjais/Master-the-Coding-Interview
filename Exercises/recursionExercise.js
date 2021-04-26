// write two functions which return factorials of any number, one of which will be recursive and one will use loop

function findFactorialRecursive(number) { // O(n)
  if (number === 2) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) { // O(n)
  if (number === 1) return 1;
  if (number === 0) return 'invalid value';
  let factorial = 1;
  while (number >= 2) {
    factorial = factorial * number;
    number--;
  }
  return factorial;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));