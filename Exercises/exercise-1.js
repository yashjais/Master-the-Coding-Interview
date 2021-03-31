// Return Recurring element Google question

// Given an array [2,1,4,6,2,5,9] // should return 2

// Another array [2,1,5,1,2,6] // should return 1

// Another array [3,5,7,9,1,6] // should return undefined

function findRecursiveElement (arr) {
  // check elements of arr and all kind of input validation
  if (!arr || arr.length === 0) return undefined;

  // brute force solution
  // another solution can be if we sort O(log(n)(depending on algo) the array, we've to just check for the duplication of adjacent element
  // const newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (newArr.includes(arr[i])) {
  //     return arr[i];
  //   }
  //   else {
  //     newArr.push(arr[i]);
  //   }
  // }

  const newSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (newSet.has(arr[i])) { // set has a lookup of O(1)
      return arr[i];
    }
    else {
      newSet.add(arr[i])
    }
  }
  return undefined;
}

const arr = [3,5, 7,5,3,7,9,1,6,];
console.log(findRecursiveElement(arr));