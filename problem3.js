/**
 * Return the largest prime factor of N = 600851475143.
 *
 * @see {@link https://projecteuler.net/problem=3}
 * Solution: 6857
 */
'use strict';

let N = 600851475143;
let Max = Math.sqrt(N); // Maximal theoretical factor.
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

console.log(largestFactor);
