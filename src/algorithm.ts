// ユークリッドの互除法（2つの数の最大公約数を求める）
export function getGCF(inputNum1: string, inputNum2: string) {
  let numA: number = Number(inputNum1);
  let numB: number = Number(inputNum2);

  // AとBが等しくなるまで繰り返し
  while (numA !== numB) {
    // numA > numB: numA = numA - numB
    if (numA > numB) {
      numA = numA - numB;
      continue;
    }

    // numB > numA: numB = numB - numA
    if (numB > numA) {
      numB = numB - numA;
      continue;
    }
  }
  return numA;
}

// 選択された年がうるう年かどうか
export function isLeapYear(year: string) {
  let strIsLeapYear = "No!!";

  return strIsLeapYear;
}
