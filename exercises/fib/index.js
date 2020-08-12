// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args)
    cache[args] = result

    return result
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// function fib(n, arr = []) {
//   if (n === arr.length - 1) {
//     return arr[arr.length - 1];
//   }

//   if (arr.length === 0) {
//     arr.push(0)
//     fib(n, arr)
//   }

//   if (arr.length === 1) {
//     arr.push(1)
//     fib(n, arr)
//   }

//   if (arr.length > 1) {
//     arr.push(arr[arr.length - 1] + arr[arr.length - 2])
//     fib(n, arr)
//   }

// }

// function fib(n) {
//   let fib = [];

//   for (let i = 0; i <= n; i++) {
//     if (fib.length <= 0) {
//       fib.push(0);
//     } else if (fib.length === 1) {
//       fib.push(1);
//     } else {
//       fib.push(fib[i - 1] + fib[i - 2]);
//     }
//   }

//   return fib[n];
// }

module.exports = fib;
