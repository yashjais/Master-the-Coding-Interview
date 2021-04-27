// Given the number n return the index of value of the fibonacci sequence, where the sequence is:-

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ....
// 0  1  2  3  4  5  6  7   8   9   10  11
// the pattern of sequence is that each value is the sum of previous two values. EX: if N=5--> 3+2

function fibonacciIterative(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let lastValue = 1, secondLastValue = 0;
  let counter = 2;
  while (counter < n) {
    counter++;
    let temp = lastValue;
    lastValue = lastValue + secondLastValue;
    secondLastValue = temp;
  }
  return lastValue + secondLastValue;
}

function fibonacciRecursive(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

// console.log(fibonacciIterative(10));
console.log(fibonacciRecursive(11));