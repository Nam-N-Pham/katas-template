export function findOutlier(integers: number[]): number {
  let numOfEvens = 0
  let numOfOdds = 0
  let answer = 0

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) numOfEvens++
    if (integers[i] % 2 === 1 || integers[i] % 2 === -1) numOfOdds++
  }
  if (numOfOdds === 1) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 1 || integers[i] % 2 === -1) answer = integers[i]
    }
  }
  if (numOfEvens === 1) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) answer = integers[i]
    }
  }

  return answer
}
