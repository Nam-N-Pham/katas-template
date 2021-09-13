export function adjacentElementsProduct(arr: number[]): number {
  let maxProduct = arr[0] * arr[1]

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] * arr[i + 1] > maxProduct) maxProduct = arr[i] * arr[i + 1]
  }

  return maxProduct
}
