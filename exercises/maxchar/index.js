// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charCounts = {}
  let maxCount = 0
  let maxCountChar = ''

  str.split('').forEach(char => {
    if (charCounts[char]) {
      charCounts[char] = charCounts[char] + 1
    }
    else {
      charCounts[char] = 1
    }
  })

  for (let char in charCounts) {
    if (charCounts[char] > maxCount) {
      maxCount = charCounts[char]
      maxCountChar = char
    }
  }

  return maxCountChar
}

module.exports = maxChar;
