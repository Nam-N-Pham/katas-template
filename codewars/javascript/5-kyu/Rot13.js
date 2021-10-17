function rot13(message) {
  const letters = message.split("");

  let encryptedLetters = letters.map((letter) => {
    if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
      return String.fromCharCode(((letter.charCodeAt() - 65 + 13) % 26) + 65);
    } else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
      return String.fromCharCode(((letter.charCodeAt() - 97 + 13) % 26) + 97);
    } else {
      return letter;
    }
  });

  return encryptedLetters.join("");
}
