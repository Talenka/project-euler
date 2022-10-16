/**
 * Powerful digit sum (problem #56)
 * ================================
 * A googol (10**100) is a massive number: one followed by one-hundred zeros;
 * 100**100 is almost unimaginably large: one followed by two-hundred zeros.
 * Despite their size, the sum of the digits in each number is only 1.
 *
 * Considering natural numbers of the form, a**b, where a, b < 100, what is the
 * maximum digital sum?
 *
 * @see {@link https://projecteuler.net/problem=56}
 *
 * Solution: 972
 */
'use strict';

/**
 * @param  {BigInt} n
 * @return {BigInt}
 */
function digitSum(n) {
  let sum = 0n;

  while (n > 0n) {
    sum += n % 10n;
    n /= 10n;
  }

  return sum;
}

/**
 * @param  {BigInt} max
 * @return {BigInt}
 */
function powerfulDigitSum(max) {
  let maxSum = 1n;

  for (let a = 2n; a < max; a++) {
    for (let b = 2n; b < max; b++) {
      const s = digitSum(a**b);
      if (s > maxSum) maxSum = s;
    }
  }

  return maxSum;
}

console.log(powerfulDigitSum(100n));
