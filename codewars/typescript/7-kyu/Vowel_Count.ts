export class Kata {
  static getCount(str: string) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
      if (
        str[index] === "a" ||
        str[index] === "e" ||
        str[index] === "i" ||
        str[index] === "o" ||
        str[index] === "u"
      )
        count++;
    }
    return count;
  }
}
