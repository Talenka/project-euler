/**
 * Return the largest Palindrom number which is the product of two 3-digits
 * numbers, i.e. from 100 to 999.
 *
 * Strategy: brute force
 * Source: https://projecteuler.net/problem=4
 * Result: 906609
 * Time: 66ms
 */
'use strict';

/** @type {number} */
let largestPalindrom = 0;

/**
 * @param {number} n
 * @return {boolean}
 */
function isPalindrom(n)
{
  /** @type {string} */
  let s = n.toString();

  return (s[0] === s[5] && s[1] === s[4] && s[2] === s[3]);
}

for (let a = 999; a > 100; a--) {
  for (let b = a; b > 100; b--) {
    if (isPalindrom(a * b)) {
      largestPalindrom = Math.max(largestPalindrom, a * b);
    }
  }
}

self.postMessage('Largest palindrom: ' + largestPalindrom, []);
