// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let rowLength = n + (n-1)

  for (let i = 1; i <= n; i++) {
    let totalHashes = i + (i-1)
    let totalSpaces = rowLength - totalHashes

    let side = Array(totalSpaces/2).fill(' ')
    let center = Array(totalHashes).fill('#')
    let row = [...side, ...center, ...side].join('')
    console.log(row)
  }
}

module.exports = pyramid;
