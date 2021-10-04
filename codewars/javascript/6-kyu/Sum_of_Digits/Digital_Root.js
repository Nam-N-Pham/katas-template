function digital_root(n) {
  if (n < 10) return n;
  let sum = 0;
  while (n > 0) {
    const currentDigit = n % 10;
    sum += currentDigit;
    n = Math.floor(n / 10);
  }
  return digital_root(sum);
}
