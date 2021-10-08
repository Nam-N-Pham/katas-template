function dirReduc(arr) {
  const reductionRule = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };

  let answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    answer.push(arr[i]);
    while (
      answer.length > 1 &&
      reductionRule[answer[answer.length - 1]] === answer[answer.length - 2]
    ) {
      answer.pop();
      answer.pop();
    }
  }

  return answer;
}
