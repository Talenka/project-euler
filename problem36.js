/**
 * Double-base palindromes (problem #36)
 * =====================================
 * The decimal number 585 = 0b1001001001 (binary), is palindromic in both bases.
 * Find the sum of all numbers, less than one million, which are palindromic in
 * base 10 and base 2. (Please note that the palindromic number, in either base,
 * may not include leading zeros.)
 *
 * @see {@link https://projecteuler.net/problem=36}
 *
 * Solution: 872187
 */
'use strict';

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrom(s) {
  if (s.length <= 1) return true;
  if (s.substr(0, 1) !== s.substr(-1, 1)) return false;
  return isPalindrom(s.substr(1, s.length - 2));
}

/**
 * @param {number} n
 * @return {number[]}
 */
function doubleBasePalindromsBelow(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    if (isPalindrom(i.toString()) && isPalindrom(i.toString(2))) {
      result.push(i);
    }
  }

  return result;
}

console.log(doubleBasePalindromsBelow(10**6).reduce((sum, x) => sum + x));
