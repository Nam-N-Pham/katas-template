function productFib(prod) {
  let fnMinus2 = 0;
  let fnMinus1 = 1;

  while (fnMinus2 * fnMinus1 <= prod) {
    let fn = fnMinus2 + fnMinus1;
    fnMinus2 = fnMinus1;
    fnMinus1 = fn;

    if (fnMinus2 * fnMinus1 === prod) {
      return [fnMinus2, fnMinus1, true];
    }
  }

  return [fnMinus2, fnMinus1, false];
}
