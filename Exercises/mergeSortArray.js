function mergeSortArray (arr1, arr2) {
  const mergedArray = [];
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  // also have to check if the element inside the array is a number or not
  // also have to check for empty array

  let index1 = 0, index2 = 0, i = 0;
  // i is just a number we will use for running the loops
  // if there are equal number, we will have to increment the i two times
  while(i < arr1.length + arr2.length) {
    console.log('indexes', index1, index2, i)
    if(arr1[index1] < arr2[index2] || !arr2[index2]) {
      mergedArray.push(arr1[index1]);
      index1++;
      i++;
    } else if (arr1[index1] > arr2[index2] || !arr1[index1]) {
      mergedArray.push(arr2[index2]);
      index2++;
      i++;
    }
    else {
      mergedArray.push(arr1[index1]);
      index1++;
      index2++;
      i += 2;
    }
  }
  console.log('mergedArray', mergedArray);
}

mergeSortArray([0,3,4,31], [4,6,30])
// [0 3 4 6 30 31]

// brute force solution
// two loops and then check whoever is greater and based on that condition push the element inside new Array - quadratic time

