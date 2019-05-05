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
  // return stringA.toLowerCase().split('').sort().join() === stringB.toLowerCase().split('').sort().join()

  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let stringACounts = {}
  let stringBCounts = {}

  for (let char of stringA) {
    let lowerChar = char.toLowerCase()

    if (alphabet.includes(lowerChar)) {
      if (stringACounts[lowerChar]) {
        stringACounts[lowerChar] = stringACounts[lowerChar]++
      }
      else {
        stringACounts[lowerChar] = 1
      }
    }
  }

  for (let char of stringB) {
    let lowerChar = char.toLowerCase()

    if (alphabet.includes(lowerChar)) {
      if (stringBCounts[lowerChar]) {
        stringBCounts[lowerChar] = stringBCounts[lowerChar]++
      }
      else {
        stringBCounts[lowerChar] = 1
      }
    }
  }

  if (Object.keys(stringACounts).length !== Object.keys(stringBCounts).length) {
    return false
  }

  for (let char in stringACounts) {
    if (stringACounts[char] !== stringBCounts[char]) {
      return false
    }
  }

  return true
}

module.exports = anagrams;
