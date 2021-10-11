function validParentheses(parens) {
  let openParen = 0;

  for (let i = 0; i < parens.length; i++) {
    parens[i] === "(" ? openParen++ : openParen--;
    if (openParen < 0) return false;
  }

  return openParen === 0 ? true : false;
}
