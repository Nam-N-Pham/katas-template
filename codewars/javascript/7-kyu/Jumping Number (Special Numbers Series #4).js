function jumpingNumber(n) {
  const digits = n
    .toString()
    .split("")
    .map((digit) => parseInt(digit));

  if (digits.length === 1) return "Jumping!!";

  for (let i = 0; i < digits.length; i++) {
    if (i === 0) {
      if (digits[i + 1] === digits[i] + 1 || digits[i + 1] === digits[i] - 1) {
        continue;
      } else {
        return "Not!!";
      }
    }

    if (i === digits.length - 1) {
      if (digits[i - 1] === digits[i] + 1 || digits[i - 1] === digits[i] - 1) {
        return "Jumping!!";
      } else {
        return "Not!!";
      }
    }

    if (digits.length > 2) {
      if (
        (digits[i - 1] === digits[i] + 1 || digits[i - 1] === digits[i] - 1) &&
        (digits[i + 1] === digits[i] + 1 || digits[i + 1] === digits[i] - 1)
      ) {
        continue;
      } else {
        return "Not!!";
      }
    }
  }

  return "Jumping!!";
}
