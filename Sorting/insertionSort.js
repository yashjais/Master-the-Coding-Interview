const numbers = [99, 44, 6, 2 ,1, 5, 63, 87, 283, 4, 0];

function insertionSort (arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    console.log(i)
    let counter = i;
    while(counter > 0) {
      if (arr[counter] < arr[counter - 1]) {
        const temp = arr[counter];
        arr[counter] = arr[counter - 1];
        arr[counter - 1] = temp;
        counter--;
      }
      else {
        counter = 0;
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);