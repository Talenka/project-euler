/**
 * Find the sum of the digits in the number 100!
 *
 * Strategy: none ;-)
 * @see https://projecteuler.net/problem=20
 * Result: 648 (100! = 933262154439441526816992388562667004907159682643816214685
 *                     929638952175999932299156089414639761565182862536979208272
 *                     23758251185210916864)
 * Time: 7ms
 */
'use strict';

/**
 * @param {number} n
 * @return {number}
 */
function factorial(n) {
  let f = 1;

  while (n > 1) {
    f *= n;
    n--;
  }

  return f;
}

/**
 * @param {number} n
 * @return {number}
 */
function sumOfDigits(n) {
  let s = 0;

  while (n > 1) {
    s += n % 10;
    n = Math.floor(n / 10);
  }

  return s;
}

console.log('Digits:', sumOfDigits(factorial(100)));
