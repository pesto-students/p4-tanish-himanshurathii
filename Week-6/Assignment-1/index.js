function maxSubArraySum(arr, size) {
  var maxint = Math.pow(2, 53);
  var max_so_far = -maxint - 1;
  var max_ending_here = 0;

  for (var i = 0; i < size; i++) {
    max_ending_here = max_ending_here + arr[i];
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;

    if (max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
}

var arr = [1, 2, 3, 4, -10];
console.log("Maximum contiguous sum is", maxSubArraySum(arr, arr.length));

/*
Output:- 10
Time Complexity: O(n)
Space Complexity: O(1)
*/
