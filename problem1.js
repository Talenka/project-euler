/**
 * Return the sum of integers n < 1000, which are multiples of 3 or 5.
 *
 * Source: https://projecteuler.net/problem=1
 *
 * Result: 233168
 * Time: 12ms
 */
'use strict';


/**
 * @return {number}
 */
function main() {
  /** @type {number} Current integer (numbers < 3 are not 3 or 5 multiple) */
  let n = 3;

  /** @type {number} Sum of integers lower than current n */
  let sum = 0;

  while (n < 1000) {
    if (n % 3 === 0 || n % 5 === 0) {
      sum += n;
    }

    n++;
  }

  return sum;
}

console.log(main());
