function chooseBestSum(t, k, ls) {
  if (k > ls.length) {
    return null;
  }

  function choose(arr, k, prefix = []) {
    if (k == 0) return [prefix];
    return arr
      .map((v, i) => choose(arr.slice(i + 1), k - 1, [...prefix, v]))
      .reduce((acc, val) => acc.concat(val), []);
  }

  let groupsOfDistances = choose(ls, k);

  let sum = 0;
  let bestSum = 0;
  for (let i = 0; i < groupsOfDistances.length; i++) {
    for (let j = 0; j < groupsOfDistances[i].length; j++) {
      sum += groupsOfDistances[i][j];
    }

    if (sum > bestSum && sum <= t) {
      bestSum = sum;
    }

    sum = 0;
  }

  return bestSum > 0 ? bestSum : null;
}
