const hasDuplicate = (arr) => {
  let mySet = new Set(arr);
  if (mySet.size !== arr.length) {
    return true;
  } else {
    return false;
  }
};
console.log(hasDuplicate([1, 5, -1, 1]));
console.log(hasDuplicate([1, 5, -1, 6]));
