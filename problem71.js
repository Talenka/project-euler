/**
 * Ordered fractions
 *
 * Consider the fraction, n/d, where n and d are positive integers. If n < d and
 * greatestCommonDivisor(n, d) = 1, it is called a reduced proper fraction.
 *
 * If we list the set of reduced proper fractions for d ≤ 8 in ascending order
 * of size, we get:
 * 1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3,
 * 5/7, 3/4, 4/5, 5/6, 6/7, 7/8
 *
 * It can be seen that 2/5 is the fraction immediately to the left of 3/7.
 *
 * By listing the set of reduced proper fractions for d ≤ 1,000,000 in ascending
 * order of size, find the numerator of the fraction immediately to the left of
 * 3/7.
 *
 * @see {@link https://projecteuler.net/problem=71}
 * Solution:
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
 * @return {Array.<integer[]>}
 */
function orderedFractions(maxDenominator, minRatio, maxRatio) {
  const properFractions = [];

  for (let d = 7; d <= maxDenominator; d++) {
    for (let n = Math.floor(d * minRatio), m = d * maxRatio; n <= m; n++) {
      if (greatestCommonDivisor(n, d) === 1) properFractions.push([n, d]);
    }
  }

  properFractions.sort((a, b) => a[0]/a[1] - b[0]/b[1]);

  for (const i in properFractions) {
    if (properFractions[i][0] === 3 && properFractions[i][1] === 7) {
      console.log(properFractions[i - 1]);
    }
  }

  return properFractions;
}

orderedFractions(1000000, 85700/199995, 3/7);
