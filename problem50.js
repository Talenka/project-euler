/**
 * Consecutive prime sum
 *
 * The prime 41, can be written as the sum of six consecutive primes:
 * 41 = 2 + 3 + 5 + 7 + 11 + 13
 *
 * This is the longest sum of consecutive primes that adds to a prime below
 * one-hundred. The longest sum of consecutive primes below one-thousand that
 * adds to a prime, contains 21 terms, and is equal to 953.
 *
 * Which prime, below one-million, can be written as the sum of the most
 * consecutive primes?
 *
 * @see {@link https://projecteuler.net/problem=50}
 * Solution: 997651
 */
'use strict';

/**
 * @param  {BigInt} n
 * @return {{maxSum: BigInt, maxLength: integer}}
 */
function mostConsecutivePrimesSumUnder(n) {
  const p = BigMath.primes;
  let sum;
  let length;
  let maxSum = 0n;
  let maxLength = 0;
  let currentStart;

  for (let i = 0, l = p.length; i < l; i++) {
    [length, sum] = [0, 0n];
    currentStart = i;

    while (sum < n && i < l) {
      sum += p[i];
      if (p.indexOf(sum) !== -1) {
        length = i - currentStart + 1;
        if (length > maxLength) [maxLength, maxSum] = [length, sum];
      }

      i++;
    }

    i = currentStart;
    if (sum > n) break;
  }

  return {maxSum: maxSum, maxLength: maxLength};
}

console.log(mostConsecutivePrimesSumUnder(1000000n));
