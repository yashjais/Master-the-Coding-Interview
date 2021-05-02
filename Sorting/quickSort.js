// const numbers = [7, 2, 1, 6, 8, 5, 3, 4];

// function partition (arr, start, end) {
//   let pivot = arr[end];
//   let partitionIndex = start;
//   // console.log('in partition', pivot, start, end)
//   for (let i = 0; i < end; i++) {
//     if (arr[i] <= pivot) {
//       // swap the i element with element at partition index
//       const temp = arr[i];
//       arr[i] = arr[partitionIndex];
//       arr[partitionIndex] = temp;
//       partitionIndex++;
//     }
//   }
//   const temp = arr[end];
//   arr[end] = arr[partitionIndex];
//   arr[partitionIndex] = temp;
//   console.log('before return ', partitionIndex)
//   return partitionIndex;
// }

// function quickSort (arr, start, end) {
//   // console.log('in quickSort',arr, start, end)
//   if (start < end) {
//     const pIndex = partition(arr, start, end);
//     // console.log('index', pIndex, arr);
//     quickSort(arr, start, pIndex - 1);
//     quickSort(arr, pIndex + 1, end);
//   }
//   return arr;
// }


// //Select first and last index as 2nd and 3rd parameters
// console.log('sorted', quickSort(numbers, 0, numbers.length - 1));
// // console.log(numbers);

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);