function anagrams(word, words) {
  const alphabetValue = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let answer = [];

  let valueOfWord = 0;
  for (let i = 0; i < word.length; i++) {
    valueOfWord += alphabetValue[word[i]];
  }

  let currentWordValue = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      currentWordValue += alphabetValue[words[i][j]];
    }
    if (currentWordValue === valueOfWord) answer.push(words[i]);
    currentWordValue = 0;
  }

  return answer;
}
