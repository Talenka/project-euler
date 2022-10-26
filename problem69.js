/**
 * Totient maximum
 *
 * Euler's Totient function, φ(n) [sometimes called the phi function], is used
 * to determine the number of numbers less than n which are relatively prime to
 * n. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and
 * relatively prime to nine, φ(9)=6.
 *
 *  n | Relatively Prime | φ(n) | n/φ(n)
 * ----------------------------------------
 *  2 | 1                |   1  | 2
 *  3 | 1,2              |   2  | 1.5
 *  4 | 1,3              |   2  | 2
 *  5 | 1,2,3,4          |   4  | 1.25
 *  6 | 1,5              |   2  | 3
 *  7 | 1,2,3,4,5,6      |   6  | 1.1(6)...
 *  8 | 1,3,5,7          |   4  | 2
 *  9 | 1,2,4,5,7,8      |   6  | 1.5
 * 10 | 1,3,7,9          |   4  | 2.5
 *
 * It can be seen that n=6 produces a maximum n/φ(n) for n ≤ 10.
 *
 * Find the value of n ≤ 1,000,000 for which n/φ(n) is a maximum.
 *
 * @see {@link https://projecteuler.net/problem=69}
 * Solution: 510510 (@todo takes a long time, about an hour)
 */
'use strict';

/**
 * @param {BigInt} a
 * @param {BigInt} b
 * @return {boolean}
 */
function relativePrime(a, b) {
  // Greatest Common Divisor from bigmath.js
  return BigMath.gcd(a, b) === 1n;
}

/**
 * @param {BigInt} n
 * @return {BigInt}
 */
function phi(n) {
  let result = 1n;
  for (let i = 2n; i < n; i++) if (relativePrime(n, i)) result++;
  return result;
}

/**
 * @param {BigInt} n
 * @return {BigInt[]}
 */
function searchPhiMaxUnder(n) {
  let [max, nMax] = [1, 1n];

  for (let i = 1n; i <= n; i += 2n) {
    const p = Number.parseInt(i) / Number.parseInt(phi(i).toString());
    if (p > max) [max, nMax] = [p, i];
  }

  return [max, nMax];
}

console.log(searchPhiMaxUnder(1000000n));
