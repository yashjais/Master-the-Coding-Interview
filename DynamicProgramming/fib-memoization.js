// 0 1 1 2 3 5 8 13 21 34 55 89...
// 0 1 2 3 4 5 6 7  8  9  10 11

let calculation = 0;
function fib (n) {
  calculation++;
  if (n < 2) return n;
  return fib(n-1) + fib(n-2);
}

// console.log(fib(30)); // 30 - 2692537 calculations
// console.log('calculation', calculation);

function memoizedFib () {
  const cache = {};
  return function fibonacci (n) {
    calculation++;
    
    if (n in cache) {
      return cache[n];
    }
    else {
      if (n < 2) return n;
      cache[n] = fibonacci(n-1) + fibonacci(n-2);
      return cache[n];
    }
  }
}

const memFib = memoizedFib();

console.log(memFib(30)); // 30 - 59 calculations
console.log('calculation', calculation);