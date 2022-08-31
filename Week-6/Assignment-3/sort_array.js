function sortArray(arr) {
  let l = 0;
  let m = 0;
  let h = arr.length - 1;
  let temp = 0;
  while (m <= h) {
    if (arr[m] == 0) {
      temp = arr[l];
      arr[l] = arr[m];
      arr[m] = temp;
      l++;
      m++;
    }
    if (arr[m] == 1) {
      m++;
    }
    if (arr[m] == 2) {
      temp = arr[m];
      arr[m] = arr[h];
      arr[h] = temp;
      h--;
    }
  }
  return arr;
}

const arr = [0, 2, 1, 2, 0];
console.log(sortArray(arr));

/*

Output:- 0 0 1 2 2
Time Complexity: O(n)
Space Complexity: O(1)

*/
