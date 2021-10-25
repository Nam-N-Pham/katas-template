function zeros(n) {
  function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }

  let trailingZeros = 0;

  for (let i = 1; i <= Math.floor(getBaseLog(5, n)); i++) {
    trailingZeros += Math.floor(n / Math.pow(5, i));
  }

  return trailingZeros;
}
