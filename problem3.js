/**
 * Return the largest prime factor of N = 600851475143.
 *
 * Strategy: progressive reduction
 * Source: https://projecteuler.net/problem=3
 * Result: 6857
 * Time: 13ms
 */


/** @type {number} */
var N = 600851475143;

/** @type {number} Maximal theoretical factor. */
var Max = Math.sqrt(N);

/** @type {number} */
var n;

/** @type {number} */
var largestFactor = 1;

for (n = 2; n <= Max; n++) {

  if (N % n == 0) {

    largestFactor = Math.max(largestFactor, n);

    N /= n;

    Max = Math.sqrt(N);

    n = 2;
  }
}

largestFactor = Math.max(largestFactor, N);

self.postMessage('Largest factor: ' + largestFactor, []);
