/**
 * Return the smallest integer N evenly divisible by all integers n < 20.
 *
 * @see {@link https://projecteuler.net/problem=5}
 * Strategy: In fact, this is just the least common multiple of 1, 2, ..., 20.
 * Solution: 232792560
 */
'use strict';

/**
 * @see {@link https://en.wikipedia.org/wiki/Greatest_common_divisor}
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
 * @see {@link https://en.wikipedia.org/wiki/Least_common_multiple}
 * Section #Reduction_by_the_greatest_common_divisor
 *
 * @param  {integer} a
 * @param  {integer} b
 * @return {integer}
 */
function leastCommonMultiple(a, b) {
  return a * b / greatestCommonDivisor(a, b);
}

/** @return {integer} */
function smallestEvenlyDivisibleInteger() {
  let N = 1;
  for (let n = 2; n < 20; n++) N = leastCommonMultiple(N, n);
  return N;
}

console.log(smallestEvenlyDivisibleInteger());
