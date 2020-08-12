// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

// function reverse(str) {
//   let reversed = "";

//   Traditional for loop
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   for of loop
//   for (let character of str) {
//     reversed = character + reversed
//   }

//   return reversed;
// }

// function reverse(str) {
//   const toReverse = str.split("");

//   return toReverse.reverse().join("");
// }

module.exports = reverse;
