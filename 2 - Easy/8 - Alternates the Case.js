// Create a function that alternates the case of the characters in a string.

// Examples
// alternatingCaps("Hello") ➞ "HeLlO"

// alternatingCaps("Hey, how are you?") ➞ "HeY, hOw aRe yOu?"

// alternatingCaps("OMG!!! This website is awesome!!") ➞ "OmG!!! tHiS WeBsItE Is aWeSoMe!!"
// Notes
// The first character should always be UPPERCASE.

const alternatingCaps = str => str.split('').map((char,index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')

console.log(alternatingCaps("Hello"))

console.log(alternatingCaps("Hey, how are you?"))

console.log(alternatingCaps("OMG!!! This website is awesome!!"))