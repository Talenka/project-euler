/**
 * Combinatorics selections
 *
 * There are exactly ten ways of selecting three from five, 12345:
 * 123, 124, 125, 134, 135, 145, 234, 235, 245, and 345
 *
 * In combinatorics, we use the notation (5 over 3) = 10 In general,
 * (n over r) = n! / [r! * (n-r)!], where r ≤ n.
 *
 * It is not until (23 over 10), that a value exceeds one-million: 1144066.
 *
 * How many, not necessarily distinct, values of (n over r) for 1 ≤ n ≤ 100,
 * are greater than one-million?
 *
 * @see {@link https://projecteuler.net/problem=53}
 * Solution: 4075
 */
'use strict';

/**
 * @param  {BigInt} n
 * @return {BigInt} n!
 */
function factorial(n) {
  let f = 1n;
  while (n > 1n) f *= n--;
  return f;
}

/**
 * @param  {BigInt} n
 * @param  {BigInt} threshold
 * @return {BigInt}
 */
function combinatoricSelections(n, threshold) {
  let result = 0n;

  for (let i = 1n; i <= n; i++) {
    for (let j = 1n; j < i; j++) {
      if (factorial(i) / (factorial(j) * factorial(i-j)) >= threshold) result++;
    }
  }

  return result;
}

console.log(combinatoricSelections(100n, 1000000n));
