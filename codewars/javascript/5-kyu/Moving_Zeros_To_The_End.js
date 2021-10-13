var moveZeros = function (arr) {
  let nonZeros = [];
  let zeros = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] === 0 ? zeros.push(0) : nonZeros.push(arr[i]);
  }

  return nonZeros.concat(zeros);
};
