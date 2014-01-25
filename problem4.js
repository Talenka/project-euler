/**
 * Return the largest Palindrom number which is the product of two 3-digits
 * numbers, i.e. from 100 to 999.
 *
 * Strategy: brute force
 * Source: https://projecteuler.net/problem=4
 * Result: 906609
 * Time: 66ms
 */

/** @type {number} */
var largestPalindrom = 0;

/**
 * @param {number} n
 * @return {boolean}
 */
function isPalindrom(n)
{
  /** @type {string} */
  var s = n.toString();

  return (s[0] == s[5] && s[1] == s[4] && s[2] == s[3]);
}

/** @type {number} */
var b;

for (var a = 999; a > 100; a--)
  for (b = a; b > 100; b--)
    if (isPalindrom(a * b))
      largestPalindrom = Math.max(largestPalindrom, a * b);

self.postMessage('Largest palindrom: ' + largestPalindrom, []);
