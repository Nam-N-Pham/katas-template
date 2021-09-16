function insertDash(num) {
  const numAsString = num.toString();
  let answer = "";

  for (let i = 0; i < numAsString.length - 1; i++) {
    if (
      Number(numAsString[i]) % 2 === 1 &&
      Number(numAsString[i + 1] % 2 === 1)
    ) {
      answer = answer + numAsString[i] + "-";
    } else {
      answer = answer + numAsString[i];
    }
  }
  answer = answer + numAsString[numAsString.length - 1];

  return answer;
}
