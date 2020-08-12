// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let strA = stringA.toLowerCase().split(' ').join('').replace(/[!:,?<>;+=-_()*&^%$#@]/g, '')
  let strB = stringB.toLowerCase().split(' ').join('').replace(/[!:,?<>;+=-_()*&^%$#@]/g, '') 
  let objectA = {}
  let objectB = {}
  
  for (let char of strA) {
    if (!objectA[char]) {
      objectA[char] = 1
    } else objectA[char] += 1
  }

  for (let char of strB) {
    if (!objectB[char]) {
      objectB[char] = 1
    } else objectB[char] += 1
  }

  return Object.keys(objectA).sort().join('') === Object.keys(objectB).sort().join('') && Object.values(objectA).sort().join('') === Object.values(objectB).sort().join('')

  console.log(Object.keys(objectA).sort().join(''))
  console.log(Object.values(objectA).sort().join(''))
  console.log(Object.keys(objectB).sort().join(''))
  console.log(Object.values(objectB).sort().join(''))
}

anagrams('hello', 'llohe')
module.exports = anagrams;

// hello" is an anagram of "llohe
// "Whoa! Hi!" is an anagram of "Hi! Whoa!"