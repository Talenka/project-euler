/**
 * Find the sum of the digits in the number 100!
 *
 * @see {@link https://projecteuler.net/problem=20}
 * Solution: 648
 */
'use strict';

/**
 * @param  {BigInt} n
 * @return {BigInt} n!
 */
function factorial(n) {
  let f = 1n;
  while (n > 1n) f *= n--;
  return f;
}

/**
 * @param  {BigInt} n
 * @return {BigInt}
 */
function digitSum(n) {
  let s = 0n;

  while (n > 1n) {
    s += n % 10n;
    n = n / 10n;
  }

  return s;
}

console.log(digitSum(factorial(100n)));
