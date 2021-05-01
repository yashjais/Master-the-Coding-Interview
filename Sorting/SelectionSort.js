const numbers = [99, 64, 7, 2, 1, 5, 265 ,63, 56, 34];

function selectionSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let smallestNumber = arr[i];
    let indexOfSmallestNumber = i;
    for (let j = i; j < length - 1; j++) {
      if (smallestNumber > arr[j + 1]) {
        smallestNumber = arr[j + 1];
        indexOfSmallestNumber = j + 1;
      }
    }
    const temp = arr[i];
    arr[i] = arr[indexOfSmallestNumber];
    arr[indexOfSmallestNumber] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);