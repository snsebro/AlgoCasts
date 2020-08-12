// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   let stringArr = str.split(" ");
//   let capitalized = "";

//   for (let word of stringArr) {
//     capitalized = `${capitalized} ${word
//       .charAt(0)
//       .toUpperCase()}${word.substring(1)}`;
//   }

//   return capitalized.trim();
// }

// function capitalize(str) {
//   let strArr = str.split(" ");
//   let capitalized = "";

//   for (word of strArr) {
//     let capitalWord = `${word[0].toUpperCase()}${word.slice(1)}`;
//     capitalized = `${capitalized} ${capitalWord}`;
//   }

//   return capitalized.trim();
// }

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else result += str[i];
  }

  return result;
}

module.exports = capitalize;
