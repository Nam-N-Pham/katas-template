function solve(stones) {
  let count = 0;
  let currentLetter = stones[0];

  for (let index = 1; index < stones.length; index++) {
    if (stones[index] === currentLetter) {
      count++;
    } else {
      currentLetter = stones[index];
    }
  }

  return count;
}
