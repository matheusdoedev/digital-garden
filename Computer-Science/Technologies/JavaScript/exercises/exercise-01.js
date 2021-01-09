/*
Codewars problem https://www.codewars.com

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
  // check if is a string
  if (typeof text !== "string" || !text) return "text should be a string";

  // store all alphabet letters in one array
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

  // text letters positions array
  let positions = [];

  // for each text letter
  // check which letter on alphabet array that match with each letter on text
  Array.from(text).forEach((letter) => {
    alphabet.forEach((item, index) => {
      // if match, store letter index on alphabet array that matchs plus one
      letter === item || letter === item.toUpperCase()
        ? positions.push(`${index + 1}`)
        : null;
    });
  });

  return positions.join().replace(/,/gi, " ");
}
