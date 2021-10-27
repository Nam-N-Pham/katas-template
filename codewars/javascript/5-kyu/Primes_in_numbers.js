function primeFactors(n) {
  function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num > 1;
  }

  let allPossiblePrimeFactorsOfN = [];
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (isPrime(i)) {
      allPossiblePrimeFactorsOfN.push(i);
    }
  }

  let primeFactors = [];

  while (!isPrime(n)) {
    for (let i = 0; allPossiblePrimeFactorsOfN[i] < n; i++) {
      if (n % allPossiblePrimeFactorsOfN[i] === 0) {
        primeFactors.push(allPossiblePrimeFactorsOfN[i]);
        n = n / allPossiblePrimeFactorsOfN[i];
        break;
      }
    }
  }

  primeFactors.push(n);

  let sortedPrimeFactors = primeFactors.sort((x, y) => x - y);
  let answer = "";

  let currentFactor = sortedPrimeFactors[0];
  let numFactors = 1;
  for (let i = 1; i < sortedPrimeFactors.length + 1; i++) {
    if (sortedPrimeFactors[i] === currentFactor) {
      numFactors++;
    } else {
      if (numFactors > 1) {
        answer = answer + `(${currentFactor}**${numFactors})`;
        currentFactor = sortedPrimeFactors[i];
        numFactors = 1;
      } else {
        answer = answer + `(${currentFactor})`;
        currentFactor = sortedPrimeFactors[i];
      }
    }
  }

  return answer;
}

// https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript

// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
