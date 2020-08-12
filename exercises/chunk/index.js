// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let length = array.length;
//   let arrs = Math.ceil(length / size);
//   let returnArray = [];

//   for (let i = 0; i <= arrs; i++) {
//     returnArray.push(array.splice(0, size));
//   }

//   returnArray.pop();
//   return returnArray;
// }

// function chunk(array, size) {
//   let returnArray = [];

//   for (let el of array) {
//     const last = returnArray[returnArray.length - 1]
//     if (!last || last.length === size) {
//       returnArray.push([el])
//     } else {
//       last.push(el)
//     }
//   }
//   return returnArray
// }

function chunk(array, size) {
  const returnArray = [];
  let i = 0;

  while (i < array.length) {
    returnArray.push(array.slice(i, i + size));
    i += size;
  }
  
  return returnArray;
}

module.exports = chunk;
