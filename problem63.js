/**
 * Powerful digit counts
 *
 * The 5-digit number, 16807 = 7**5, is also a fifth power. Similarly,
 * the 9-digit number, 134217728 = 8**9, is a ninth power.
 * How many n-digit positive integers exist which are also an nth power?
 *
 * @see {@link https://projecteuler.net/problem=63}
 * Solution: 49
 */
'use strict';

/**
 * @param  {BigInt} max
 * @return {BigInt}
 */
function powerfulDigitCount(max) {
  let n = 0n;

  for (let a = 1n; a < max; a++) {
    for (let b = 1n; b < max; b++) {
      if (BigInt((a**b).toString().length) === b) n++;
    }
  }

  return n;
}

console.log(powerfulDigitCount(100n));
