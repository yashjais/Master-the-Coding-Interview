// closure

function memoizedAddTo80() {
  const cache = {};
  return function (value) {
    if (value in cache) {
      return cache[value];
    }
    else {
      console.log('long time');
      cache[value] = 80 + value;
      return cache[value];
    }
  }
};

const memoized = memoizedAddTo80();

console.log(memoized(5));
// console.log(memoized(5)); // will return the value from cache
console.log(memoized(6));
console.log(memoized(6));