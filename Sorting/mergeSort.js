// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4];
const numbers = [99, 44, 6, 2, 1, 5, 63, 87];
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

function merge (left, right) {
  console.log('left, right', left, right)
  // comparision
  const returnArr = [];
  let i = 0, j = 0;
  while(left.length !== 0 && right.length !== 0) {
    console.log('in the while loop', returnArr.length,i, j, left.length, right.length, returnArr)
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

console.log(mergeSort(numbers));
// i'm returning a new array
// console.log('numbers', numbers);