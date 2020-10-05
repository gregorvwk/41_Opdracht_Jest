// const addOne = function(numbers) {
//     // Schrijf hier de functie...
//     const numbersPlusOne = numbers.map(element => {
//         return element + 1
//     })
//     return numbersPlusOne
// }

// module.exports = addOne;

// const getWordLengths = function(someWords) {
//     //Schrijf je functie...
//     const wordsLength = someWords.map(element => {
//         return element.length
//     })
//     return wordsLength
// };

// module.exports = getWordLengths;

const findNeedle = function(words) {
    // Schrijf hier de functie...
    const needlefilter = words.findIndex(element => element === "needle")
    return needlefilter
  };
  module.exports = findNeedle;