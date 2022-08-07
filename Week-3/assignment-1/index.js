const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = n + 20;
      cache[n] = result;
      return result;
    }
  }
}
const newAdd = memoizedAdd();
console.log(newAdd(9)); // calculated
console.log(newAdd(9)); // cached
console.log(newAdd(10)); // cached
console.log(newAdd(20)); // cached

/* memoization helps speed up function calls by storing previously
 computed results in a JavaScript object that is cache

 Output:- 
Calculating result
29
Fetching from cache
29
Calculating result
30
Calculating result
40
*/