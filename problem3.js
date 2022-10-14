/**
 * Return the largest prime factor of N = 600851475143.
 *
 * @see https://projecteuler.net/problem=3
 * Solution: 6857
 */
'use strict';

/**
 * @return {number}
 */
function largestPrimeFactor() {
  /** @type {number} */
  let N = 600851475143;

  /** @type {number} Maximal theoretical factor. */
  let Max = Math.sqrt(N);

  /** @type {number} */
  let largestFactor = 1;

  for (let n = 2; n <= Max; n++) {
    if (N % n === 0) {
      largestFactor = Math.max(largestFactor, n);
      N /= n;
      Max = Math.sqrt(N);
      n = 2;
    }
  }

  largestFactor = Math.max(largestFactor, N);

  return largestFactor;
}

console.log(largestPrimeFactor());
