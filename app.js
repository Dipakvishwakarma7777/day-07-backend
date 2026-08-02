function checker(ch) {
  if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
    if (
      ch === "a" ||
      ch === "e" ||
      ch === "o" ||
      ch === "u" ||
      ch === "i" ||
      ch === "A" ||
      ch === "E" ||
      ch === "O" ||
      ch === "U" ||
      ch === "I"
    ) {
      return "vowel";
    }
    return "consonant";
  }
  return "invalid";
}

console.log(checker("A"));
