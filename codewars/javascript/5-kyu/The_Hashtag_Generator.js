function generateHashtag(str) {
  const trimmedStr = str.trim();

  if (trimmedStr === "") return false;

  const regex = /\s+/;
  const arrayOfWords = trimmedStr.split(regex);

  // if (arrayOfWords.length === 0) return false;

  for (let i = 0; i < arrayOfWords.length; i++) {
    let upperCaseFirstLetter = arrayOfWords[i][0].toUpperCase();
    arrayOfWords[i] = upperCaseFirstLetter + arrayOfWords[i].substring(1);
  }

  let result = "#";
  result += arrayOfWords.join("");

  if (result.length <= 140) {
    return result;
  } else {
    return false;
  }
}
