function listSquared(m, n) {
  let answer = [];

  for (let i = m; i <= n; i++) {
    let lowerBound = 1;
    let upperBound = i;
    let divisors = [];

    if (i === 1) {
      answer.push([1, 1]);
      continue;
    }

    while (lowerBound < upperBound) {
      if (i % lowerBound === 0) {
        divisors.push(lowerBound);
        upperBound = i / lowerBound;
        if (upperBound !== lowerBound) {
          divisors.push(upperBound);
        }
      }

      lowerBound++;
    }

    let sumOfSquaredDivisors = divisors
      .map((divisor) => divisor ** 2)
      .reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
      }, 0);

    if (sumOfSquaredDivisors ** 0.5 % 1 === 0) {
      answer.push([i, sumOfSquaredDivisors]);
    }
  }

  return answer;
}
