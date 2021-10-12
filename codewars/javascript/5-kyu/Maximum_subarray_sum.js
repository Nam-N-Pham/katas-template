var maxSequence = function (arr) {
  if (arr === []) return 0;

  let allNegative = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length[i] > 0) allNegative = false;
  }
  if (!allNegative) return 0;

  let maxSum = 0;
  let currentSum = 0;
  let currentArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      currentArr = arr.slice(i, j + 1);
      for (let k = 0; k < currentArr.length; k++) {
        currentSum += currentArr[k];
        if (currentSum > maxSum) maxSum = currentSum;
      }
      currentSum = 0;
    }
  }

  return maxSum;
};
