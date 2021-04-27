// Given the number n return the index of value of the fibonacci sequence, where the sequence is:-

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ....
// 0  1  2  3  4  5  6  7   8   9   10  11
// the pattern of sequence is that each value is the sum of previous two values. EX: if N=5--> 3+2

function fibonacciIterative(n) { // O(n)
  if (n < 2) return n;
  let lastValue = 1, secondLastValue = 0;
  let counter = 2;
  // this is my solution
  // arrays can also be used for this approach
  while (counter < n) {
    counter++;
    let temp = lastValue;
    lastValue = lastValue + secondLastValue;
    secondLastValue = temp;
  }
  return lastValue + secondLastValue;
}

// more readable but not an ideal solution
// this complexity can by turned to O(n) by using dynamic programming(memoization)
// In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
function fibonacciRecursive(n) { // O(2*n)
  if (n < 2) return n;
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciIterative(11));
// console.log(fibonacciRecursive(11));