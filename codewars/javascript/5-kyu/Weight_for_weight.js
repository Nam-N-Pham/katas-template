function orderWeight(strng) {
  if (strng.length === 0) return "";
  if (strng.length === 1) return strng;

  const arrayOfNum = strng.trim().split(/\s+/g);

  let numberAndWeight = {};
  for (let i = 0; i < arrayOfNum.length; i++) {
    let digits = arrayOfNum[i].split("");
    let weight = 0;

    for (let j = 0; j < digits.length; j++) {
      weight += Number.parseInt(digits[j]);
    }

    numberAndWeight[arrayOfNum[i]] = weight;
  }

  let temp = 0;

  for (let i = 0; i < arrayOfNum.length; i++) {
    for (let j = i; j < arrayOfNum.length; j++) {
      if (numberAndWeight[arrayOfNum[j]] < numberAndWeight[arrayOfNum[i]]) {
        temp = arrayOfNum[i];
        arrayOfNum[i] = arrayOfNum[j];
        arrayOfNum[j] = temp;
      }
      if (numberAndWeight[arrayOfNum[j]] === numberAndWeight[arrayOfNum[i]]) {
        if (arrayOfNum[j] < arrayOfNum[i]) {
          temp = arrayOfNum[i];
          arrayOfNum[i] = arrayOfNum[j];
          arrayOfNum[j] = temp;
        }
      }
    }
  }

  return arrayOfNum.join(" ");
}
