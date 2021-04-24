/* https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/typescript
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/
let str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function (locales?: string | string[]): string {
  const resultArray: string[] = this.split(" ").map((s: string) => {
    let wordResult: string[] = [];

    for (let x = 0; x < s.length; x++) {
      if (x === 0) {
        wordResult.push(s.charAt(x).toUpperCase());
      } else {
        wordResult.push(s.charAt(x));
      }
    }

    return wordResult.join("");
  });

  return resultArray.join(" ");
};

console.log(str.toLocaleLowerCase());
