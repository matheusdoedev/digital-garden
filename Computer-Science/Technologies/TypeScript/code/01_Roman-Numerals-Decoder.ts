enum RomanNumericValues {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000,
}

function getValue(roman: string): number {
  switch (roman) {
    case "I":
      return RomanNumericValues.I;
    case "V":
      return RomanNumericValues.V;
    case "X":
      return RomanNumericValues.X;
    case "L":
      return RomanNumericValues.L;
    case "C":
      return RomanNumericValues.C;
    case "D":
      return RomanNumericValues.D;
    case "M":
      return RomanNumericValues.M;
    default:
      throw new Error("Roman symbol invalid");
  }
}

function solution(roman: string): number {
  let result = 0;
  let previousValue: number;

  Array.from(roman).forEach((i) => {
    const value = getValue(i);

    if (previousValue && previousValue < value) {
      result += value - previousValue;
    } else {
      result += value;
    }

    previousValue = value;
  });

  console.log(result);

  return 0;
}

solution("XXI"); // 21
solution("I"); // 1
solution("IV"); // 4
solution("MMVIII"); // 2008
solution("MDCLXVI"); // 1666
