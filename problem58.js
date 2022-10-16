/**
 * Spiral primes (problem #58)
 * =====================================
 * Starting with 1 and spiraling anticlockwise in the following way, a square
 * spiral with side length 7 is formed.
 *
 *     37 36 35 34 33 32 31
 *     38 17 16 15 14 13 30
 *     39 18  5  4  3 12 29
 *     40 19  6  1  2 11 28
 *     41 20  7  8  9 10 27
 *     42 21 22 23 24 25 26
 *     43 44 45 46 47 48 49
 *
 * It is interesting to note that the odd squares lie along the bottom right
 * diagonal, but what is more interesting is that 8 out of the 13 numbers lying
 * along both diagonals are prime; that is, a ratio of 8/13 ≈ 62%.
 *
 * If one complete new layer is wrapped around the spiral above, a square spiral
 * with side length 9 will be formed. If this process is continued, what is the
 * side length of the square spiral for which the ratio of primes along both
 * diagonals first falls below 10%?
 *
 * @see {@link https://projecteuler.net/problem=58}
 *
 * Solution:
 * The diagonal numbers are:
 * (2n - 1)**2 + 2n;
 * (2n - 1)**2 + 4n;
 * (2n - 1)**2 + 6n;
 * (2n - 1)**2 + 8n = (2n + 1)**2, which is never prime.
 *
 * We just have to check primality of these series of n, and computes the ratio
 * with 4n + 1.
 */
'use strict';

/**
 * @param  {BigInt} nMax
 * @return {?BigInt}
 */
function spiralPrimes(nMax) {
  const p = BigMath.primes;
  let np = 0n;

  for (let n = 1n; n <= nMax; n++) {
    if (p.indexOf((2n*n - 1n)**2n + n*2n) !== -1) np++;
    if (p.indexOf((2n*n - 1n)**2n + n*4n) !== -1) np++;
    if (p.indexOf((2n*n - 1n)**2n + n*6n) !== -1) np++;

    console.log(np, 4n * n + 1n, 100n * np / (4n * n + 1n));
    if (1000n * np < 95n * (4n * n + 1n)) return 2n * n + 1n;
  }

  return null;
}

console.log(spiralPrimes(2000n));
