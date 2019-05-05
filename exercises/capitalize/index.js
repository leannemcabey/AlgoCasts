// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let splitString = str.split(' ')
  let titleCasedArray = []

  splitString.forEach(word => {
    titleCasedArray.push(word[0].toUpperCase() + word.slice(1))

    if (splitString.indexOf(word) !== splitString.length-1) {
      titleCasedArray.push(' ')
    }
  })

  return titleCasedArray.join('')

  // Can also iterate through the characters and if the character before is a space than capitalize it and push
}

module.exports = capitalize;
