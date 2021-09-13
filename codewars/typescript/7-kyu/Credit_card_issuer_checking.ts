import { Issuer } from './preloaded'
export const getIssuer = (x: number): Issuer => {
  let inputAsString = x.toString()

  if (
    (inputAsString.startsWith('34') || inputAsString.startsWith('37')) &&
    inputAsString.length === 15
  ) {
    return Issuer.AMEX
  } else if (inputAsString.startsWith('6011') && inputAsString.length === 16) {
    return Issuer.Discover
  } else if (
    (inputAsString.startsWith('51') ||
      inputAsString.startsWith('52') ||
      inputAsString.startsWith('53') ||
      inputAsString.startsWith('54') ||
      inputAsString.startsWith('55')) &&
    inputAsString.length === 16
  ) {
    return Issuer.Mastercard
  } else if (
    inputAsString.startsWith('4') &&
    (inputAsString.length === 13 || inputAsString.length === 16)
  ) {
    return Issuer.VISA
  } else {
    return Issuer.Unknown
  }
}
