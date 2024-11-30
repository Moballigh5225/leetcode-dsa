function findWords(words) {
  const row1 = "qwertyuiop";
  const row2 = "asdfghjkl";
  const row3 = "zxcvbnm";

  let result = [];
  for (let word of words) {
    // converting to lowercase
    const lowerWord = word.toLowerCase();

    let row1Match = true;
    let row2Match = true;
    let row3Match = true;

    for (let i = 0; i < lowerWord.length; i++) {
      if (!row1.includes(lowerWord[i])) {
        row1Match = false;
      }
      if (!row2.includes(lowerWord[i])) {
        row2Match = false;
      }
      if (!row3.includes(lowerWord[i])) {
        row3Match = false;
      }
    }
    if (row1Match || row2Match || row3Match) {
      result.push(word);
    }
  }
  return result;
}
const words = ["Hello", "Alaska", "Dad", "Peace", "bzmzn", "oyou"];
console.log(findWords(words)); // Output: ["Alaska", "Dad"]
