function findLongestWord(words) {
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const words = ["Kiran", "Fazione", "Kevlar", "Palermo", "Lara", "Espanol"];
const longestWord = findLongestWord(words);
console.log("The longest word is:", longestWord);