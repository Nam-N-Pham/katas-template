function scramble(str1, str2) {
  if (str1.length < str2.length) {
    return false;
  }

  let str1Letters = str1.split("").sort();

  for (let i = 0; i < str2.length; i++) {
    //     for (let j = 0; j < str1Letters.length; j++) {
    //       if (str2[i] === str1Letters[j]) {
    //         let splicedLetter = str1Letters.splice(j, 1)
    //         break
    //       }
    //       if (j === str1Letters.length - 1) {
    //         return false
    //       }
    //     }
    let minIndex = 0;
    let maxIndex = str1Letters.length - 1;
    while (true) {
      if (
        str2[i] !== str1Letters[Math.floor((minIndex + maxIndex) / 2)] &&
        minIndex === maxIndex
      ) {
        return false;
      }
      if (str2[i] === str1Letters[Math.floor((minIndex + maxIndex) / 2)]) {
        str1Letters.splice(Math.floor((minIndex + maxIndex) / 2), 1);
        break;
      } else if (
        str2[i].charCodeAt() <
        str1Letters[Math.floor((minIndex + maxIndex) / 2)].charCodeAt()
      ) {
        maxIndex = Math.floor((minIndex + maxIndex) / 2);
        continue;
      } else if (
        str2[i].charCodeAt() >
        str1Letters[Math.floor((minIndex + maxIndex) / 2)].charCodeAt()
      ) {
        minIndex = Math.floor((minIndex + maxIndex) / 2) + 1;
        continue;
      }
    }
  }

  return true;
}
