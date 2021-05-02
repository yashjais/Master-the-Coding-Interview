// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4];
const numbers = [99, 44, 6, 2, 1, 5, 63]
// what if the array is odd number or when we split the array the results are odd?
// let's take one step at a time.. first work on the comparision function, then think about this

function mergeSort (arr) {
  // console.log('in mergesort', arr)
  if (arr.length === 1) {
    return arr;
  }
  // split the array into right and left
  const left = arr.splice(0, arr.length/2);
  const right = arr;

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}
/**
function merge (left, right) {
  console.log('left, right', left, right)
  // comparision
  const returnArr = [];
  let i = 0, j = 0;
  while(left.length !== 0 && right.length !== 0) {
    if (j === right.length) {
      const slicedArr = left.splice(i, left.length);
      returnArr.push(...slicedArr);
      left.length = 0;
    }
    else if (i === left.length) {
      const slicedArr = right.splice(j, right.length);
      returnArr.push(...slicedArr);
      right.length = 0;
    }
    else if (left[i] < right[j]) {
      returnArr.push(left[i]);
      // left.splice(0, 1);
      i++;
    }
    else {
      returnArr.push(right[j]);
      // right.splice(0, 1);

      j++;
    }
  }
  console.log('return arr', returnArr)
  return returnArr;
}
 */

// andrea implemention
function merge (left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log(left, right, leftIndex, rightIndex);
  return result.concat(left.splice(leftIndex)).concat(right.splice(rightIndex));
}

console.log(mergeSort(numbers));
// i'm returning a new array - andrea is also returning new array!