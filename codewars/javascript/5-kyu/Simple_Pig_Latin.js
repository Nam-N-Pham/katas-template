function pigIt(str) {
  let splitString = str.split(" ");

  for (let i = 0; i < splitString.length; i++) {
    if (!(splitString[i].search(/\w/g) === -1)) {
      splitString[i] =
        splitString[i].substring(1, splitString[i].length) +
        splitString[i][0] +
        "ay";
    } else continue;
  }

  return splitString.join(" ");
}
