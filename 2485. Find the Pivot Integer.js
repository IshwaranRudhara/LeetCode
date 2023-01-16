/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  if (n === 1) {
    return 1;
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  let sum2 = 0;
  for (let i = 1; i <= n; i++) {
    if (sum === sum2) {
      return i - 1;
    }
    sum = sum - i;
    sum2 = sum2 + (i - 1);
    console.log(sum, sum2);
  }
  return -1;
};
