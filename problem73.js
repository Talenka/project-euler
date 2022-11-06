/**
 * Counting fractions in a range
 *
 * Consider the fraction, n/d, where n and d are positive integers. If n < d and
 * greatestCommonDivisor(n, d) = 1, it is called a reduced proper fraction.
 *
 * If we list the set of reduced proper fractions for d ≤ 8 in ascending order
 * of size, we get:
 * 1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3,
 * 5/7, 3/4, 4/5, 5/6, 6/7, 7/8
 *
 * It can be seen that there are 3 fractions between 1/3 and 1/2.
 *
 * How many fractions lie between 1/3 and 1/2 in the sorted set of reduced
 * proper fractions for d ≤ 12,000?
 *
 * @see {@link https://projecteuler.net/problem=73}
 * Solution: 7295372
 */
'use strict';

/**
 * @see https://en.wikipedia.org/wiki/Greatest_common_divisor
 * Section #Using_Euclid.27s_algorithm
 *
 * @param  {integer} a
 * @param  {integer} b
 * @return {integer}
 */
function greatestCommonDivisor(a, b) {
  if (b > a) [a, b] = [b, a];
  if (a % b === 0) return b;
  return greatestCommonDivisor(b, a % b);
}

/**
 * @param  {integer} maxDenominator
 * @param  {number}  minRatio
 * @param  {number}  maxRatio
 * @return {integer}
 */
function orderedFractions(maxDenominator, minRatio, maxRatio) {
  let count = 0;

  for (let d = 2; d <= maxDenominator; d++) {
    for (let n = Math.floor(d * minRatio), m = d * maxRatio; n < m; n++) {
      if (n/d > minRatio && greatestCommonDivisor(n, d) === 1) count++;
    }
  }

  return count;
}

console.log(orderedFractions(12000, 1/3, 1/2));
