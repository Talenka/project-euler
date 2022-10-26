/**
 * Return the largest palindrome number which is the product of two 3-digits
 * numbers, i.e. from 100 to 999.
 *
 * @see {@link https://projecteuler.net/problem=4}
 * Solution: 906609
 */
'use strict';

/**
 * @param  {integer} n 6-digit integer
 * @return {boolean}
 */
function isPalindrome(n) {
  const s = n.toString();
  return (s[0] === s[5] && s[1] === s[4] && s[2] === s[3]);
}

/** @return {integer} */
function productLargestPalindrome() {
  let largest = 0;

  for (let a = 999; a > 100; a--) {
    for (let b = a; b > 100; b--) {
      if (isPalindrome(a * b)) largest = Math.max(largest, a * b);
    }
  }

  return largest;
}

console.log(productLargestPalindrome());
