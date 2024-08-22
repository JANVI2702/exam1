//bubble_sorting
function bubble_sort(arr) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);
  return arr;
}
console.log(bubble_sort([3, 5, 2, 8, 1]));
