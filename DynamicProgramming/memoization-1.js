function addTo80(value) {
  console.log('long time');
  return 80 + value;
};

// console.log(addTo80(5));
// console.log(addTo80(5));

// memoization is a technique to cache a return value of function based on its parameter
const cache = {};
function memoizedAddTo80(value) {
  if (value in cache) {
    return cache[value];
  }
  else {
    console.log('long time');
    cache[value] = 80 + value;
    return cache[value];
  }
};

console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5)); // will return the value from cache
console.log(memoizedAddTo80(6));