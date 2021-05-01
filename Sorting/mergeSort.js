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
  while(returnArr.length < left.length + right.length) {
      console.log('in the while loop', returnArr.length, left.length, right.length, returnArr)
    if (j === right.length) {
      returnArr.push(left[0], left[1]);
    }
    else if (i === left.length) {
      returnArr.push(right[0], right[1])
    }
    else if (left[i] < right[j]) {
      returnArr.push(left[i]);
      i++;
    }
    else {
      returnArr.push(right[j]);
      j++;
    }
  }
  console.log('return arr', returnArr)
  return returnArr;
}

mergeSort(numbers);
console.log(numbers);