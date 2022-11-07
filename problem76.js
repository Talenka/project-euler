/**
 * Counting summations
 *
 * It is possible to write five as a sum in exactly six different ways:
 *
 * 4 + 1
 * 3 + 2
 * 3 + 1 + 1
 * 2 + 2 + 1
 * 2 + 1 + 1 + 1
 * 1 + 1 + 1 + 1 + 1
 *
 * How many different ways can one hundred be written as a sum of at least two
 * positive integers?
 *
 * @see {@link https://projecteuler.net/problem=76}
 * Solution: 190569291 (partition function p(n)-1, because we sum mini 2 nums).
 * @see {@link https://en.wikipedia.org/wiki/Pentagonal_number_theorem}
 *
 * @todo find a procedural manner to find the result, instead of generative
 * function. An idea may be to link partition function to totient, because
 * p(n) approach an O(exp(a*n)/n).
 */
'use strict';

/**
 * First attempt, by recurrence, and a lower(!) bound for the solution.
 * @param  {integer} n
 * @return {integer}
 */
function naiveSumCounting(n) {
  // Edge cases
  if (n <= 1) return 0;
  if (n === 2) return 1;

  // 1) Here the first part of the summation account for the number of possible
  // summations with only 2 terms,
  // 2) The second part account for the solutions ending with a "+ 1", and this
  // number can be predicted by this naive recurrence.
  // We can note that, except for 4 = 2 + 2 = 2 x 2, non-primes integers could
  // be summations of numerous sets.
  return Math.floor(n / 2) + naiveSumCounting(n - 1);
}

console.log(naiveSumCounting(5));
