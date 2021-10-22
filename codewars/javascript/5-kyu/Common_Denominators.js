function convertFrac(lst) {
  if (lst.length === 0) {
    return "";
  }

  const denoms = lst.map((fraction) => fraction[1]);
  const highestDenom = Math.max(...denoms);

  let commonDenom = highestDenom;
  let foundCommonDenom = false;
  while (!foundCommonDenom) {
    for (let i = 0; i < denoms.length; i++) {
      if (commonDenom % denoms[i] !== 0) {
        commonDenom += highestDenom;
        break;
      }
      if (
        commonDenom % denoms[denoms.length - 1] === 0 &&
        i === denoms.length - 1
      ) {
        foundCommonDenom = true;
      }
    }
  }

  const lstMultipliedByCommonDenom = lst.map((fraction) => [
    fraction[0] * (commonDenom / fraction[1]),
    commonDenom,
  ]);

  return lstMultipliedByCommonDenom
    .map((fraction) => `(${fraction[0]},${fraction[1]})`)
    .join("");
}
