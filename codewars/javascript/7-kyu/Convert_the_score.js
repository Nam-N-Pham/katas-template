function scoreboard(string) {
  const scores = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const answer = [];

  const stringSplit = string.split(" ");
  for (let index = 0; index < stringSplit.length; index++) {
    if (scores[stringSplit[index]] !== undefined) {
      answer.push(scores[stringSplit[index]]);
    }
  }

  return answer;
}
