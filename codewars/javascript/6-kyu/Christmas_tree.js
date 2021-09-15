function christmasTree(height) {
  if (height === 0) return ''

  let answer = ''

  const star = '*'
  let currentLine = ''
  for (let i = 1; i <= height; i++) {
    currentLine = star.repeat(i * 2 - 1)
    let maxCharacterOfLastLine = height * 2 - 1
    let totalPaddingOfCurrentLine = maxCharacterOfLastLine - (i * 2 - 1)
    currentLine = currentLine.padStart(
      totalPaddingOfCurrentLine / 2 + (i * 2 - 1)
    )
    currentLine = currentLine.padEnd(maxCharacterOfLastLine)
    answer = answer + currentLine
    if (i < height) answer = answer + '\n'
  }

  return answer
}
