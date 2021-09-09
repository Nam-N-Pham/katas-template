export function maxNumber(n: number): number {
  const digits = []

  while(n != 0)
  {
    digits.push(n % 10)
    n = Math.floor(n / 10)
  }
  digits.sort()

  let answer = 0
  for(let i = 0; i < digits.length; i++)
  {
    answer = answer + digits[i] * Math.pow(10, i)
  }

  return answer;
}